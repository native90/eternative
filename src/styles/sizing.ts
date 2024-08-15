import invertValues from "../functions/invertValues";

export const sizing = {
  0: 0,
  0.5: 2, // 2px
  1: 4, // 4px
  1.5: 6, // 6px
  2: 8, // 8px
  2.5: 10, // 10px
  3: 12, // 12px
  3.5: 14, // 14px
  4: 16, // 16px
  5: 20, // 20px
  6: 24, // 24px
  7: 28, // 28px
  8: 32, // 32px
  9: 36, // 36px
  10: 40, // 40px
  11: 44, // 44px
  12: 48, // 48px
  14: 56, // 56px
  16: 64, // 64px
  20: 80, // 80px
  24: 96, // 96px
  28: 112, // 112px
  32: 128, // 128px
  36: 144, // 144px
  40: 160, // 160px
  44: 176, // 176px
  48: 192, // 192px
  52: 208, // 208px
  56: 224, // 224px
  60: 240, // 240px
  64: 256, // 256px
  72: 288, // 288px
  80: 320, // 320px
  96: 384, // 384px
  100: 400, // 400px
};

export const invertedSizing = invertValues(sizing);
