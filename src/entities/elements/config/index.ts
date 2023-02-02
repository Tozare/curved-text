import { Values } from '@src/shared/typings/object-values';

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

export const DEFAULT_TEXT_ELEMENT = {
  type: ELEMENT_TYPES.TEXT,
  width: 100,
  height: 16,
  fontFamily: "Arial",
  fontWeight: 500,
  fontSize: 14,
  color: "#1E1E1E",
  letterSpacing: 0.6,
  lineHeight: 16,
  textAlign: TEXT_ALIGN_TYPES.LEFT,
  text: "Type Here...",
  x: 30,
  y: 30,
} as const;