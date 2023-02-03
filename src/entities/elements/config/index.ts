import { Values } from '@src/shared/typings/object-values';
import { CurvedTextElement, TextElement } from '@src/entities/elements/typings';

export const ELEMENT_TYPES = {
  TEXT: "TEXT",
  CURVED_TEXT: "CURVED_TEXT"
} as const;

export const TEXT_ALIGN_TYPES = {
  "LEFT": "left",
  "CENTER": "center",
  "RIGHT": "right",
  "LEFT_RIGHT": "justify",
} as const;

export const TEXT_FONT_STYLES_TYPES = {
  "NORMAL": "normal",
  "BOLD": "bold",
  "ITALIC": "italic",
  "ITALIC_BOLD": "italic bold",
} as const;


export const FONT_WEIGHT_TO_NAME = {
  100: "Thin",
  200: "Extra light",
  300: "Light",
  400: "Normal",
  500: "Medium",
  600: "Semi bold",
  700: "Bold",
  800: "Extra bold",
  900: "Black",
} as const;
export const DEFAULT_FONTS = [
  "Arial",
  "Verdana",
  "Tahoma",
  "Trebuchet MS",
  "Times New Roman",
  "Georgia",
  "Garamond",
  "Courier New",
  "Brush Script MT",
];

export const DEFAULT_FONTS_WEIGHTS = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
export const DEFAULT_COLORS= [
  "#FFBBBB",
  "#1E1E1E",
  "#FF0000",
  "#00FFFF",
  "#BBBBBB",
] as const;

export const MIN = 0;
export const MAX_RADIUS = 100000;
export const MIN_CURVE = -100;
export const MAX_CURVE = 100;
export const DEFAULT_CURVE = 0;
export const STEP = 1;

export const SELECTION_ID = "SELECTION_ID";

export const DEFAULT_TEXT_ELEMENT: TextElement = {
  id: "curvedText",
  type: ELEMENT_TYPES.TEXT,
  width: 145,
  height: 32,
  fontFamily: "Arial",
  fontWeight: 500,
  fontSize: 14,
  fill: "#1E1E1E",
  letterSpacing: 0.6,
  lineHeight: 16,
  textAlign: TEXT_ALIGN_TYPES.LEFT,
  fontStyle: TEXT_FONT_STYLES_TYPES.NORMAL,
  text: "design your curved text with ease",
  // path: "M 72.5 72.5\n" +
  //   "    m -61.27534460371188 -38.75025346622082\n" +
  //   "    a 72.5 72.5 0 1,1 122.55068920742376, 77.50050693244164\n" +
  //   "    a 72.5 72.5 0 1,1 -122.55068920742376, -77.50050693244164",
  x: 150,
  y: 150,
  // radius: 50,
  // curve: 40,
} as const;