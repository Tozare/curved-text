import { createEvent, guard, restore, sample } from 'effector';
import { Values } from '@src/shared/typings/object-values';
import { elementsConfig, elementsModel, CurvedTextElement, TextElement, elementsLib } from '@src/entities/elements';
import { $element, curveChanged } from '@src/entities/elements/model';
import { textLib } from "@src/shared/libs";

export const textTypeChanged = createEvent<Values<typeof elementsConfig.ELEMENT_TYPES> | null>();
export const $textType = restore(textTypeChanged, elementsConfig.ELEMENT_TYPES.TEXT);

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
      ...copyElement,
      height: textHeight,
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
    const {
      fontFamily,
      letterSpacing,
      fontStyle,
      fontWeight,
      fontSize,
      x,
      width,
      text,
      lineHeight,
    } = element as TextElement;
    const curve = 50;
    const radius = elementsLib.getRadiusByCurve({ curve, fontSize });
    const textWidth = textLib.getTextWidth({
      fontSize,
      text,
      letterSpacing,
      fontStyle,
      fontWeight,
      fontFamily,
    });
    const boundingHeight = elementsLib.getTextBoundingHeight({ radius, textWidth, curve, lineHeight });
    const boundingWidth = elementsLib.getTextBoundingWidth({ radius, textWidth, curve, lineHeight })
    const path = elementsLib.getPath({ radius, curve, textWidth, height: boundingHeight, fontSize });

    return {
      ...element,
      curve,
      height: boundingHeight,
      width: boundingWidth,
      type: elementsConfig.ELEMENT_TYPES.CURVED_TEXT,
      path,
    } as CurvedTextElement;
  },
  target: [
    elementsModel.elementChanged,
    curveChanged.prepend<{ curve: number}>(({ curve }) => curve),
    textTypeChanged.prepend(() => elementsConfig.ELEMENT_TYPES.CURVED_TEXT),
  ]

});

export const $elementType = $element.map((element) => element.type);

sample({
  source: $elementType,
  target: textTypeChanged,
});



