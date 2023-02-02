import {
  ELEMENT_TYPES,
  TEXT_ALIGN_TYPES
} from "../config";
import { Values } from '@src/shared/typings/object-values';

interface ElementInit {
  id: string,
  type: Values<typeof ELEMENT_TYPES>,
  width: number,
  height: number,
  x: number,
  y: number,
}

interface TextStylesInit {
  fontFamily: string,
  fontWeight: number,
  fontSize: number,
  fill: string,
  letterSpacing: number,
  lineHeight: number,
  fontStyle: string,
  textAlign: Values<typeof TEXT_ALIGN_TYPES>,
  text: string,
}

export interface TextElement
  extends ElementInit,
    TextStylesInit {
  type: typeof ELEMENT_TYPES.TEXT,
}

export interface CurvedTextElement
  extends ElementInit,
    TextStylesInit {
  type: typeof ELEMENT_TYPES.CURVED_TEXT,
  radius: number,
}

export type Element = TextElement | CurvedTextElement;