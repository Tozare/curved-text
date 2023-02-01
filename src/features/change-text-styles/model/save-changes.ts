import { createEvent, sample } from 'effector';
import { elementsModel } from "@src/entities/elements";
import type { Element } from "@src/entities/elements";
import * as changeColorModel from "./change-color";
import * as changeFontFamilyModel from "./change-font-family";
import * as changeFontSizeModel from "./change-font-size";
import * as changeFontWeightModel from "./change-font-weight";
import * as changeLetterSpacingModel from "./change-letter-spacing";
import * as changeLineHeightModel from "./change-line-height";
import * as changeTextAlignModel from "./change-text-align";

export const changesSaved = createEvent();

sample({
  clock: changesSaved,
  source: [
    changeColorModel.$color,
    changeFontFamilyModel.$fontFamily,
    changeFontSizeModel.$fontSize,
    changeFontWeightModel.$fontWeight,
    changeLetterSpacingModel.$letterSpacing,
    changeLineHeightModel.$lineHeight,
    changeTextAlignModel.$textAlign,
    elementsModel.$element,
  ],
  fn: ([color, fontFamily, fontSize, fontWeight, letterSpacing, lineHeight, textAlign, element]) => {

    return {
      ...(element as Element),
      fontFamily,
      fontWeight,
      fontSize,
      color,
      letterSpacing,
      lineHeight,
      textAlign,
    } as Element;
  },
  target: elementsModel.elementChanged,
})