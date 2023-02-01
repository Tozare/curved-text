import { createEvent, createStore, restore, sample } from 'effector';
import { elementsModel, elementsConfig } from "@src/entities/elements";
import { Values } from '@src/shared/typings/object-values';

export const textAlignChanged = createEvent<Values<typeof elementsConfig.TEXT_ALIGN_TYPES>>();
export const $textAlign = restore(textAlignChanged, elementsConfig.TEXT_ALIGN_TYPES.LEFT);

sample({
  clock: elementsModel.elementInitialized,
  fn: (element) => {
    return element.textAlign;
  },
  target: textAlignChanged,
});

