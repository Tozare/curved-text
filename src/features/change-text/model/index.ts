import { createEvent, restore, sample } from 'effector';
import { Element, elementsModel } from '@src/entities/elements';

export const textChanged = createEvent<string>()
export const $text = restore(textChanged, "");

sample({
  clock: elementsModel.elementInitialized,
  fn: (element) => {
    return element.text;
  },
  target: textChanged,
});

export const textSubmitted = createEvent();
sample({
  clock: textSubmitted,
  source: [
    $text,
    elementsModel.$element,
  ],
  fn: ([text, element]) => {
    return {
      ...(element as Element),
      text,
    } as Element;
  },
  target: elementsModel.elementChanged,
})
