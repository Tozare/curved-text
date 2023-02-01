import { createEvent, createStore, restore, sample } from 'effector';
import { elementsModel, elementsConfig } from "@src/entities/elements";

export const lineHeightChanged = createEvent<number>();
export const $lineHeight = restore(lineHeightChanged, 0);

sample({
  clock: elementsModel.elementInitialized,
  fn: (element) => {
    return element.lineHeight;
  },
  target: lineHeightChanged,
});

