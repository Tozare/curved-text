import { createEvent, createStore, restore, sample } from 'effector';
import { elementsModel, elementsConfig } from "@src/entities/elements";

export const fontWeightChanged = createEvent<number>();
export const $fontWeight = restore(fontWeightChanged, elementsConfig.DEFAULT_FONTS_WEIGHTS[0]);

sample({
  clock: elementsModel.elementInitialized,
  fn: (element) => {
    return element.fontWeight;
  },
  target: fontWeightChanged,
});

