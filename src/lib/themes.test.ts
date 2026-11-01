import { describe, expect, test } from 'vitest';
import { hexToHsl, hexToPresetPalette } from './themes';

describe('hexToHsl', () => {
  test('converts black', () => {
    expect(hexToHsl('#000000')).toEqual([0, 0, 0]);
  });

  test('converts white', () => {
    expect(hexToHsl('#FFFFFF')).toEqual([0, 0, 100]);
  });

  test('converts pure red', () => {
    expect(hexToHsl('#FF0000')).toEqual([0, 100, 50]);
  });

  test('handles hash-less input', () => {
    expect(hexToHsl('00FF00')).toEqual([120, 100, 50]);
  });
});

describe('hexToPresetPalette', () => {
  test('returns light and dark modes', () => {
    const palette = hexToPresetPalette('#6366f1');
    expect(palette.light.primary).toBeDefined();
    expect(palette.dark.primary).toBeDefined();
    expect(palette.light.primaryFg).toBeDefined();
    expect(palette.dark.primaryFg).toBeDefined();
  });

  test('produces valid HSL strings', () => {
    const palette = hexToPresetPalette('#6366f1');
    const hslRe = /^\d+ \d+% \d+%$/;
    expect(hslRe.test(palette.light.primary)).toBe(true);
    expect(hslRe.test(palette.dark.primary)).toBe(true);
  });
});
