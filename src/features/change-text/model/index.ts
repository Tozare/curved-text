import { createEvent, createStore, guard, restore, sample } from 'effector';
import { elementsModel, elementsConfig, elementsLib, CurvedTextElement } from '@src/entities/elements';
import { textLib, dataPathLib, rotationLib } from "@src/shared/libs";

export const $isInputModeOpened = createStore(false);
export const inputModeOpened = createEvent();
export const inputModeClosed = createEvent();

$isInputModeOpened
  .on(inputModeOpened, () => true)
  .on(inputModeClosed, () => false);

export const textInitialized = createEvent<string>();
export const $text = restore(textInitialized, elementsConfig.DEFAULT_TEXT_ELEMENT.text);

sample({
  clock: inputModeOpened,
  source: elementsModel.$element,
  fn: (element) => element.text,
  target: textInitialized,
});

export const textChanged = createEvent<string>();

sample({
  clock: textChanged,
  target: textInitialized,
});

export const curvedTextChanged = guard({
  clock: sample({
    clock: textChanged,
    source: elementsModel.$element,
    fn: (element, text) => {
      return {
        ...element,
        text,
      };
    }
  }),
  filter: (element) => element.type === elementsConfig.ELEMENT_TYPES.CURVED_TEXT
})

export const defaultTextChanged = guard({
  clock: sample({
    clock: textChanged,
    source: elementsModel.$element,
    fn: (element, text) => {
      return {
        ...element,
        text,
      };
    }
  }),
  filter: (element) => element.type === elementsConfig.ELEMENT_TYPES.TEXT
})

sample({
  clock: curvedTextChanged,
  fn: (element) => {
    const {
      fontFamily,
      letterSpacing,
      fontStyle,
      fontWeight,
      fontSize,
      x,
      width,
      curve,
      text,
    } = element as CurvedTextElement;
    const radius = elementsLib.getRadiusByCurve({ curve, fontSize });
    const textWidth = textLib.getTextWidth({
      fontSize,
      text,
      letterSpacing,
      fontStyle,
      fontWeight,
      fontFamily,
    });
    const boundingHeight = elementsLib.getTextBoundingHeight({ radius, textWidth, curve });
    const boundingWidth = elementsLib.getTextBoundingWidth({ radius, textWidth, curve })
    const path = elementsLib.getPath({ radius, curve, textWidth, height: boundingHeight, fontSize });

    return {
      ...element,
      width: boundingWidth,
      height: boundingHeight,
      path,
    };
  },
  target: [
    elementsModel.elementChanged,
  ]
});

sample({
  clock: defaultTextChanged,
  fn: (element) => {
    const {
      fontFamily,
      letterSpacing,
      fontStyle,
      fontWeight,
      fontSize,
      x,
      width,
      curve,
      text,
      lineHeight,
    } = element as CurvedTextElement;

    const textHeight = textLib.getTextHeight({
      fontSize,
      text,
      letterSpacing,
      fontStyle,
      fontWeight,
      fontFamily,
      width,
      lineHeight,
    });

    return {
      ...element,
      height: textHeight,
    };
  },
  target: [
    elementsModel.elementChanged,
  ]
});