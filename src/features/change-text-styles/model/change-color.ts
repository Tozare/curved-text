import { createEvent, createStore, restore, sample } from 'effector';
import { elementsModel } from "@src/entities/elements";

export const colorChanged = createEvent<string>();
export const $color = restore(colorChanged, "");

sample({
  clock: elementsModel.elementInitialized,
  fn: (element) => {
    return element.color;
  },
  target: colorChanged,
});