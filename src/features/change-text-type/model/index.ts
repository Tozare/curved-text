import { createEvent, guard, restore, sample } from 'effector';
import { Values } from '@src/shared/typings/object-values';
import { elementsConfig, elementsModel, CurvedTextElement, TextElement } from '@src/entities/elements';
import { $element } from '@src/entities/elements/model';

export const textTypeChanged = createEvent<Values<typeof elementsConfig.ELEMENT_TYPES> | null>();
export const $textType = restore(textTypeChanged, elementsConfig.ELEMENT_TYPES.CURVED_TEXT);

export const textTypeSwitched = createEvent<Values<typeof elementsConfig.ELEMENT_TYPES>>();

export const textTypeActivated = guard({
  clock: textTypeSwitched,
  filter: (type) => type === elementsConfig.ELEMENT_TYPES.TEXT
});

export const curvedTextTypeActivated = guard({
  clock: textTypeSwitched,
  filter: (type) => type === elementsConfig.ELEMENT_TYPES.CURVED_TEXT
});


sample({
  clock: textTypeActivated,
  source: elementsModel.$element,
  fn: (element) => {
    const copyElement = {...element} as CurvedTextElement;
    delete copyElement["radius"];
    return {
      ...copyElement,
      type: elementsConfig.ELEMENT_TYPES.TEXT,
    };
  },
  target: [
    elementsModel.elementChanged,
    textTypeChanged.prepend(() => elementsConfig.ELEMENT_TYPES.TEXT),
  ]
});

sample({
  clock: curvedTextTypeActivated,
  source: elementsModel.$element,
  fn: (element) => {
    return {
      ...element,
      curve: 70,
      type: elementsConfig.ELEMENT_TYPES.CURVED_TEXT,
    } as CurvedTextElement;
  },
  target: [
    elementsModel.elementChanged,
    textTypeChanged.prepend(() => elementsConfig.ELEMENT_TYPES.CURVED_TEXT),
  ]

});

export const $elementType = $element.map((element) => element.type);

sample({
  source: $elementType,
  target: textTypeChanged,
});



