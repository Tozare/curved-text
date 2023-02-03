import { Box } from "@chakra-ui/react";
import React from "react";
import { reflect } from '@effector/reflect';
import { getThemeColors } from '@src/shared/libs/get-theme-colors';
import { Stage, Layer, Rect, Text, Circle, Line, TextPath, Path } from 'react-konva';
import { ElementNode } from "./element-node";
import { elementsModel, CurvedText, Element, CurvedTextElement, Selection } from '@src/entities/elements';
import { ChangeText, changeTextModel } from "@src/features/change-text";
type Props = {
  element: Element,
  onOpenInputMode: () => void,
  isInputModeOpened: boolean,
}

const EditorView = ({ element, onOpenInputMode, isInputModeOpened }: Props) => {

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
    path,
  } = element as CurvedTextElement;
  return (
    <Box
      position="relative"
      width="600px"
      height="720px"
      backgroundColor={background}
    >
      <Box
        position="absolute"
      >
        <Stage width={600} height={720}>
          <Layer>
            <ElementNode element={element} isInputModeOpened={isInputModeOpened} />
            <Selection
              width={width}
              height={height}
              x={x}
              y={y}
              onDoubleClick={() => onOpenInputMode()}
              isInputModeOpened={isInputModeOpened}
            />
          </Layer>
        </Stage>
      </Box>
      <ChangeText
        lineHeight={element.lineHeight}
        fontFamily={element.fontFamily}
        fontSize={element.fontSize}
        textAlign={element.textAlign}
        fill={element.fill}
        width={element.width}
        height={element.height}
        letterSpacing={element.letterSpacing}
        x={element.x}
        y={element.y}
        fontWeight={element.fontWeight}
      />
    </Box>
  )
}

export const Editor = reflect({
  view: EditorView,
  bind: {
    element: elementsModel.$element,
    onOpenInputMode: changeTextModel.inputModeOpened,
    isInputModeOpened: changeTextModel.$isInputModeOpened,
  },
});