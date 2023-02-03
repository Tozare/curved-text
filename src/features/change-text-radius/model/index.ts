import { createEvent, guard, restore, sample } from 'effector';
import { Values } from '@src/shared/typings/object-values';
import { elementsConfig, elementsLib, elementsModel, CurvedTextElement, TextElement } from '@src/entities/elements';
import { rotationLib, textLib } from "@src/shared/libs";
import { getPath } from '@src/entities/elements/lib';

export const curveChanged = createEvent<number>();
export const $curve = restore(curveChanged, 50);

export const $type = elementsModel.$element.map((element) => element.type);

export const curveSliderMoved = createEvent<number>();

sample({
  clock: curveSliderMoved,
  source: elementsModel.$element,
  fn: (element, curve) => {
    const {
      fontFamily,
      text,
      letterSpacing,
      fontStyle,
      fontWeight,
      fontSize,
      x,
      width,
    } = element;
    const radius = elementsLib.getRadiusByCurve({ curve });
    const textWidth = textLib.getTextWidth({
      fontSize,
      text,
      letterSpacing,
      fontStyle,
      fontWeight,
      fontFamily,
    });

    const boundingHeight = elementsLib.getTextBoundingHeight({ radius, textWidth });
    const boundingWidth = elementsLib.getTextBoundingWidth({ radius, textWidth })

    const path = elementsLib.getPath({ radius, curve, textWidth, height: boundingHeight });

    return {
      ...element,
      width: boundingWidth,
      height: boundingHeight,
      path,
      curve,
    };
  },
  target: [
    elementsModel.elementChanged,
  ]
});

sample({
  clock: [curveSliderMoved, elementsModel.curveChanged],
  target: curveChanged,
});
