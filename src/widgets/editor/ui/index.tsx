import { Box } from "@chakra-ui/react";
import React from "react";
import { reflect } from '@effector/reflect';
import { getThemeColors } from '@src/shared/libs/get-theme-colors';
import { Stage, Layer, Rect, Text, Circle, Line, TextPath, Path } from 'react-konva';
import { elementsModel, CurvedText, Element, CurvedTextElement, Selection } from '@src/entities/elements';
type Props = {
  element: Element,
}

const EditorView = ({ element }: Props) => {

  const {
    background,
  } = getThemeColors();
  const {
    fill,
    fontFamily,
    fontSize,
    fontWeight,
    x,
    y,
    height,
    width,
    type,
    text,
    textAlign,
    letterSpacing,
    lineHeight,
    id,
    fontStyle,
    radius,
    curve,
  } = element as CurvedTextElement;
  return (
    <Box
      position="relative"
      width="600px"
      height="720px"
      backgroundColor={background}
    >
      <Stage width={600} height={720}>
        <Layer>
          <Text text="Some text on canvas" fontSize={15} />

          <CurvedText
            id={id}
            fontSize={fontSize}
            width={width}
            height={height}
            x={x}
            y={y}
            fontWeight={fontWeight}
            fontFamily={fontFamily}
            fontStyle={fontStyle}
            fill={fill}
            text={text}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            radius={radius}
            curve={curve}
          />
          <Selection
            width={width}
            height={height}
            x={x}
            y={y}
          />
        </Layer>
      </Stage>
    </Box>
  )
}

export const Editor = reflect({
  view: EditorView,
  bind: {
    element: elementsModel.$element,
  },
});