import { createEvent, guard, restore, sample } from 'effector';
import { Values } from '@src/shared/typings/object-values';
import { elementsConfig, elementsModel, CurvedTextElement, TextElement } from '@src/entities/elements';
import { rotationLib, textLib } from "@src/shared/libs";

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
    const radius = (1/(curve * curve)) * elementsConfig.MAX_RADIUS + 10;
    console.log("radius", radius);
    const textWidth = textLib.getTextWidth({
      fontSize,
      text,
      letterSpacing,
      fontStyle,
      fontWeight,
      fontFamily,
    });
    const rotationDeg = rotationLib.getCircleCenterRotationDeg({
      valueLength: textWidth,
      radius: radius,
    });
    const availableSegment = textWidth;
    const availableSegmentDeg = availableSegment / radius;
    let valueDeg = availableSegmentDeg / 2;
    // valueDeg *= (180/Math.PI);
    // valueDeg = (valueDeg)*Math.PI/180;
    let finalHeight = 0;
    if (textWidth >= 2 * Math.PI * radius) {
      finalHeight = radius * 2;
    } else if (textWidth >= Math.PI * radius) {
      const availableSegment = 2 * Math.PI * radius - textWidth;
      const availableSegmentDeg = availableSegment / radius;
      let valueDeg = availableSegmentDeg / 2;
      finalHeight = radius + radius * Math.cos(valueDeg);
    } else {
      finalHeight = radius - radius * Math.cos(valueDeg);
    }


    let finalWidth = 0;
    if (textWidth >= Math.PI * radius) {
      finalWidth = radius * 2;
    } else {
      const availableSegment = textWidth;
      const availableSegmentDeg = availableSegment / radius;
      let valueDeg = availableSegmentDeg / 2;
      finalWidth = 2 * radius * Math.sin(valueDeg);
    }

    return {
      ...element,
      width: finalWidth,
      height: finalHeight,
      // x: x + (width - finalWidth),
      curve,
    };
  },
  target: [
    elementsModel.elementChanged,
  ]
});

sample({
  clock: curveSliderMoved,
  target: curveChanged,
});

