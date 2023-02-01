import { createEvent, createStore, restore, sample } from 'effector';
import { elementsModel, elementsConfig } from "@src/entities/elements";

export const fontSizeChanged = createEvent<number>();
export const $fontSize = restore(fontSizeChanged, 0);

sample({
  clock: elementsModel.elementInitialized,
  fn: (element) => {
    return element.fontSize;
  },
  target: fontSizeChanged,
});

