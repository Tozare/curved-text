import { createEvent, createStore,sample  } from 'effector';
import Konva from 'konva';
import KonvaEventObject = Konva.KonvaEventObject;
import { elementsModel } from "@src/entities/elements";

export const elementDragged = createEvent<{ x: number, y: number }>();

sample({
  clock: elementDragged,
  source: elementsModel.$element,
  fn: (element, { x, y }) => {
    return {
      ...element,
      x,
      y,
    }
  },
  target: elementsModel.elementChanged,
});

export const $isCurveTextMoving = createStore(false);
export const curveTextMovingStarted = createEvent();
export const curveTextMovingFinished = createEvent();

$isCurveTextMoving
  .on(curveTextMovingStarted, () => true)
  .on(curveTextMovingFinished, () => false);