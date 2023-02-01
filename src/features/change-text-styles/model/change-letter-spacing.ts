import { createEvent, createStore, restore, sample } from 'effector';
import { elementsModel, elementsConfig } from "@src/entities/elements";

export const letterSpacingChanged = createEvent<number>();
export const $letterSpacing = restore(letterSpacingChanged, 0);

sample({
  clock: elementsModel.elementInitialized,
  fn: (element) => {
    return element.letterSpacing;
  },
  target: letterSpacingChanged,
});

