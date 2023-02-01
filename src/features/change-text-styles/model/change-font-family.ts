import { createEvent, createStore, restore, sample } from 'effector';
import { elementsModel, elementsConfig } from "@src/entities/elements";

export const fontFamilyChanged = createEvent<string>(elementsConfig.DEFAULT_FONTS[0]);
export const $fontFamily = restore(fontFamilyChanged, "");

sample({
  clock: elementsModel.elementInitialized,
  fn: (element) => {
    return element.fontFamily;
  },
  target: fontFamilyChanged,
});

