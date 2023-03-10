import { createEvent, createStore, guard, restore, sample } from 'effector';
import { Values } from '@src/shared/typings/object-values';
import { elementsConfig, elementsLib, elementsModel, CurvedTextElement, TextElement } from '@src/entities/elements';
import { rotationLib, textLib } from "@src/shared/libs";
import { getPath } from '@src/entities/elements/lib';
import * as lib from '@src/entities/elements/lib';

export const curveChanged = createEvent<number>();
export const $curve = restore(curveChanged, 50);

export const curvingChangeStarted = createEvent();
export const curvingChangeFinished = createEvent();
export const $isCurveChanging = createStore(false);

$isCurveChanging
  .on(curvingChangeStarted, () => true)
  .on(curvingChangeFinished, () => false);

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
      lineHeight,
    } = element;
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

    const path = elementsLib.getPath({ radius, curve, textWidth, height: boundingHeight, width: boundingWidth, fontSize });
    return {
      ...element,
      width: boundingWidth,
      height: boundingHeight,
      path: path,
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
