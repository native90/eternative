import {
  generateBaseColorClasses,
  generateColorClasses,
} from "../functions/generateClasses";

export const baseColors = {
  "bg-inherit": "inherit",
  "bg-current": "currentColor",
  white: "#fff",
  black: "#000",
  transparent: "transparent",
};

const slateColors = {
  50: "rgb(248, 250, 252)",
  100: "rgb(241, 245, 249)",
  200: "rgb(226, 232, 240)",
  300: "rgb(203, 213, 225)",
  400: "rgb(148, 163, 184)",
  500: "rgb(100, 116, 139)",
  600: "rgb(71, 85, 105)",
  700: "rgb(51, 65, 85)",
  800: "rgb(30, 41, 59)",
  900: "rgb(15, 23, 42)",
  950: "rgb(2, 6, 23)",
};

const grayColors = {
  "50": "rgb(249, 250, 251)",
  "100": "rgb(243, 244, 246)",
  "200": "rgb(229, 231, 235)",
  "300": "rgb(209, 213, 219)",
  "400": "rgb(156, 163, 175)",
  "500": "rgb(107, 114, 128)",
  "600": "rgb(75, 85, 99)",
  "700": "rgb(55, 65, 81)",
  "800": "rgb(31, 41, 55)",
  "900": "rgb(17, 24, 39)",
  "950": "rgb(3, 7, 18)",
};

const zincColors = {
  50: "rgb(250, 250, 250)",
  100: "rgb(244, 244, 245)",
  200: "rgb(228, 228, 231)",
  300: "rgb(212, 212, 216)",
  400: "rgb(161, 161, 170)",
  500: "rgb(113, 113, 122)",
  600: "rgb(82, 82, 91)",
  700: "rgb(63, 63, 70)",
  800: "rgb(39, 39, 42)",
  900: "rgb(24, 24, 27)",
  950: "rgb(9, 9, 11)",
};

const neutralColors = {
  "50": "rgb(250 250 250)",
  "100": "rgb(245 245 245)",
  "200": "rgb(229 229 229)",
  "300": "rgb(212 212 212)",
  "400": "rgb(163 163 163)",
  "500": "rgb(115 115 115)",
  "600": "rgb(82 82 82)",
  "700": "rgb(64 64 64)",
  "800": "rgb(38 38 38)",
  "900": "rgb(23 23 23)",
  "950": "rgb(10 10 10)",
};

const stoneColors = {
  "50": "rgb(250 250 249)",
  "100": "rgb(245 245 244)",
  "200": "rgb(231 229 228)",
  "300": "rgb(214 211 209)",
  "400": "rgb(168 162 158)",
  "500": "rgb(120 113 108)",
  "600": "rgb(87 83 78)",
  "700": "rgb(68 64 60)",
  "800": "rgb(41 37 36)",
  "900": "rgb(28 25 23)",
  "950": "rgb(12 10 9)",
};

const redColors = {
  50: "rgb(254, 242, 242)",
  100: "rgb(254, 226, 226)",
  200: "rgb(254, 202, 202)",
  300: "rgb(252, 165, 165)",
  400: "rgb(248, 113, 113)",
  500: "rgb(239, 68, 68)",
  600: "rgb(220, 38, 38)",
  700: "rgb(185, 28, 28)",
  800: "rgb(153, 27, 27)",
  900: "rgb(127, 29, 29)",
  950: "rgb(69, 10, 10)",
};

const orangeColors = {
  "50": "rgb(255 247 237)",
  "100": "rgb(255 237 213)",
  "200": "rgb(254 215 170)",
  "300": "rgb(253 186 116)",
  "400": "rgb(251 146 60)",
  "500": "rgb(249 115 22)",
  "600": "rgb(234 88 12)",
  "700": "rgb(194 65 12)",
  "800": "rgb(154 52 18)",
  "900": "rgb(124 45 18)",
  "950": "rgb(67 20 7)",
};

const amberColors = {
  "50": "rgb(255 251 235)",
  "100": "rgb(254 243 199)",
  "200": "rgb(253 230 138)",
  "300": "rgb(252 211 77)",
  "400": "rgb(251 191 36)",
  "500": "rgb(245 158 11)",
  "600": "rgb(217 119 6)",
  "700": "rgb(180 83 9)",
  "800": "rgb(146 64 14)",
  "900": "rgb(120 53 15)",
  "950": "rgb(69 26 3)",
};

const yellowColors = {
  "50": "rgb(254 252 232)",
  "100": "rgb(254 249 195)",
  "200": "rgb(254 240 138)",
  "300": "rgb(253 224 71)",
  "400": "rgb(250 204 21)",
  "500": "rgb(234 179 8)",
  "600": "rgb(202 138 4)",
  "700": "rgb(161 98 7)",
  "800": "rgb(133 77 14)",
  "900": "rgb(113 63 18)",
  "950": "rgb(66 32 6)",
};

const limeColors = {
  "50": "rgb(247 254 231)",
  "100": "rgb(236 252 203)",
  "200": "rgb(217 249 157)",
  "300": "rgb(190 242 100)",
  "400": "rgb(163 230 53)",
  "500": "rgb(132 204 22)",
  "600": "rgb(101 163 13)",
  "700": "rgb(77 124 15)",
  "800": "rgb(63 98 18)",
  "900": "rgb(54 83 20)",
  "950": "rgb(26 46 5)",
};

const greenColors = {
  "50": "rgb(240 253 244)",
  "100": "rgb(220 252 231)",
  "200": "rgb(187 247 208)",
  "300": "rgb(134 239 172)",
  "400": "rgb(74 222 128)",
  "500": "rgb(34 197 94)",
  "600": "rgb(22 163 74)",
  "700": "rgb(21 128 61)",
  "800": "rgb(22 101 52)",
  "900": "rgb(20 83 45)",
  "950": "rgb(5 46 22)",
};

const emeraldColors = {
  "50": "rgb(236 253 245)",
  "100": "rgb(209 250 229)",
  "200": "rgb(167 243 208)",
  "300": "rgb(110 231 183)",
  "400": "rgb(52 211 153)",
  "500": "rgb(16 185 129)",
  "600": "rgb(5 150 105)",
  "700": "rgb(4 120 87)",
  "800": "rgb(6 95 70)",
  "900": "rgb(6 78 59)",
  "950": "rgb(2 44 34)",
};

const tealColors = {
  "50": "rgb(240 253 250)",
  "100": "rgb(204 251 241)",
  "200": "rgb(153 246 228)",
  "300": "rgb(94 234 212)",
  "400": "rgb(45 212 191)",
  "500": "rgb(20 184 166)",
  "600": "rgb(13 148 136)",
  "700": "rgb(15 118 110)",
  "800": "rgb(17 94 89)",
  "900": "rgb(19 78 74)",
  "950": "rgb(4 47 46)",
};

const cyanColors = {
  "50": "rgb(236 254 255)",
  "100": "rgb(207 250 254)",
  "200": "rgb(165 243 252)",
  "300": "rgb(103 232 249)",
  "400": "rgb(34 211 238)",
  "500": "rgb(6 182 212)",
  "600": "rgb(8 145 178)",
  "700": "rgb(14 116 144)",
  "800": "rgb(21 94 117)",
  "900": "rgb(22 78 99)",
  "950": "rgb(8 51 68)",
};

const skyColors = {
  "50": "rgb(240 249 255)",
  "100": "rgb(224 242 254)",
  "200": "rgb(186 230 253)",
  "300": "rgb(125 211 252)",
  "400": "rgb(56 189 248)",
  "500": "rgb(14 165 233)",
  "600": "rgb(2 132 199)",
  "700": "rgb(3 105 161)",
  "800": "rgb(7 89 133)",
  "900": "rgb(12 74 110)",
  "950": "rgb(8 47 73)",
};

const blueColors = {
  "50": "rgb(239 246 255)",
  "100": "rgb(219 234 254)",
  "200": "rgb(191 219 254)",
  "300": "rgb(147 197 253)",
  "400": "rgb(96 165 250)",
  "500": "rgb(59 130 246)",
  "600": "rgb(37 99 235)",
  "700": "rgb(29 78 216)",
  "800": "rgb(30 64 175)",
  "900": "rgb(30 58 138)",
  "950": "rgb(23 37 84)",
};

const indigoColors = {
  50: "rgb(238, 242, 255)",
  100: "rgb(224, 231, 255)",
  200: "rgb(199, 210, 254)",
  300: "rgb(165, 180, 252)",
  400: "rgb(129, 140, 248)",
  500: "rgb(99, 102, 241)",
  600: "rgb(79, 70, 229)",
  700: "rgb(67, 56, 202)",
  800: "rgb(55, 48, 163)",
  900: "rgb(49, 46, 129)",
  950: "rgb(30, 27, 75)",
};

const violetColors = {
  "50": "rgb(245 243 255)",
  "100": "rgb(237 233 254)",
  "200": "rgb(221 214 254)",
  "300": "rgb(196 181 253)",
  "400": "rgb(167 139 250)",
  "500": "rgb(139 92 246)",
  "600": "rgb(124 58 237)",
  "700": "rgb(109 40 217)",
  "800": "rgb(91 33 182)",
  "900": "rgb(76 29 149)",
  "950": "rgb(46 16 101)",
};

const purpleColors = {
  "50": "rgb(250 245 255)",
  "100": "rgb(243 232 255)",
  "200": "rgb(233 213 255)",
  "300": "rgb(216 180 254)",
  "400": "rgb(192 132 252)",
  "500": "rgb(168 85 247)",
  "600": "rgb(147 51 234)",
  "700": "rgb(126 34 206)",
  "800": "rgb(107 33 168)",
  "900": "rgb(88 28 135)",
  "950": "rgb(59 7 100)",
};

const fuchsiaColors = {
  "50": "rgb(253 244 255)",
  "100": "rgb(250 232 255)",
  "200": "rgb(245 208 254)",
  "300": "rgb(240 171 252)",
  "400": "rgb(232 121 249)",
  "500": "rgb(217 70 239)",
  "600": "rgb(192 38 211)",
  "700": "rgb(162 28 175)",
  "800": "rgb(134 25 143)",
  "900": "rgb(112 26 117)",
  "950": "rgb(74 4 78)",
};

const pinkColors = {
  50: "rgb(253, 242, 248)",
  100: "rgb(252, 231, 243)",
  200: "rgb(251, 207, 232)",
  300: "rgb(249, 168, 212)",
  400: "rgb(244, 114, 182)",
  500: "rgb(236, 72, 153)",
  600: "rgb(219, 39, 119)",
  700: "rgb(190, 24, 93)",
  800: "rgb(157, 23, 77)",
  900: "rgb(131, 24, 67)",
  950: "rgb(80, 7, 36)",
};

const roseColors = {
  "50": "rgb(255 241 242)",
  "100": "rgb(255 228 230)",
  "200": "rgb(254 205 211)",
  "300": "rgb(253 164 175)",
  "400": "rgb(251 113 133)",
  "500": "rgb(244 63 94)",
  "600": "rgb(225 29 72)",
  "700": "rgb(190 18 60)",
  "800": "rgb(159 18 57)",
  "900": "rgb(136 19 55)",
  "950": "rgb(76 5 25)",
};

export const baseTheme = generateBaseColorClasses(baseColors);
export const slateTheme = generateColorClasses(slateColors, "slate");
export const grayTheme = generateColorClasses(grayColors, "gray");
export const zincTheme = generateColorClasses(zincColors, "zinc");
export const neutralTheme = generateColorClasses(neutralColors, "neutral");
export const stoneTheme = generateColorClasses(stoneColors, "stone");
export const redTheme = generateColorClasses(redColors, "red");
export const orangeTheme = generateColorClasses(orangeColors, "orange");
export const amberTheme = generateColorClasses(amberColors, "amber");
export const yellowTheme = generateColorClasses(yellowColors, "yellow");
export const limeTheme = generateColorClasses(limeColors, "lime");
export const greenTheme = generateColorClasses(greenColors, "green");
export const emeraldTheme = generateColorClasses(emeraldColors, "emerald");
export const tealTheme = generateColorClasses(tealColors, "teal");
export const cyanTheme = generateColorClasses(cyanColors, "cyan");
export const skyTheme = generateColorClasses(skyColors, "sky");
export const blueTheme = generateColorClasses(blueColors, "blue");
export const indigoTheme = generateColorClasses(indigoColors, "indigo");
export const violetTheme = generateColorClasses(violetColors, "violet");
export const purpleTheme = generateColorClasses(purpleColors, "purple");
export const fuchsiaTheme = generateColorClasses(fuchsiaColors, "fuchsia");
export const pinkTheme = generateColorClasses(pinkColors, "pink");
export const roseTheme = generateColorClasses(roseColors, "rose");
