/**
 * build.mjs
 *
 * Wraps the production build in a raised Node heap limit.
 *
 * The Vite production build of this project peaks above Node's default
 * ~2 GB heap on machines with under 8 GB of RAM, crashing with
 * "memory allocation of N bytes failed" before finishing. Raising
 * --max-old-space-size moves the ceiling up. It is set through
 * NODE_OPTIONS (rather than an execArgv flag) so that the limit also
 * inherits into any child processes Vite spawns.
 *
 * Run:  node scripts/build.mjs
 * Auto-runs as the "build" npm script.
 *
 * Env:
 *   BUILD_HEAP_MB  heap ceiling in megabytes (default 4096)
 */

/* global process, console */

import { spawnSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const VITE_BIN = join(ROOT, "node_modules", "vite", "bin", "vite.js");
const heapMb = Number(process.env.BUILD_HEAP_MB ?? 4096);

// ── heap limit ────────────────────────────────────────────────────────────────

const inheritedOptions = process.env.NODE_OPTIONS?.trim();
process.env.NODE_OPTIONS = inheritedOptions
  ? `${inheritedOptions} --max-old-space-size=${heapMb}`
  : `--max-old-space-size=${heapMb}`;

// ── steps ─────────────────────────────────────────────────────────────────────

function run(command, args) {
  // node.exe and file paths are spawned directly — no shell, so paths with
  // spaces (e.g. "C:\Program Files\nodejs\node.exe") survive.
  const result = spawnSync(command, args, {
    cwd: ROOT,
    stdio: "inherit",
  });
  return result.status ?? 1;
}

console.log(`building with --max-old-space-size=${heapMb}`);

const resume = run(process.execPath, [join("scripts", "generate-resume.mjs")]);
if (resume !== 0) {
  console.error(`generate-resume failed with exit code ${resume}`);
  process.exit(resume);
}

const vite = run(process.execPath, [VITE_BIN, "build", "--config", "vite.config.ts"]);
if (vite !== 0) {
  console.error(`vite build failed with exit code ${vite}`);
  process.exit(vite);
}

console.log("build complete");
