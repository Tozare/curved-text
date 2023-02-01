import { Box } from "@chakra-ui/react";
import React from "react";
import { Text, Element, elementsModel } from '@src/entities/elements';
import { reflect } from '@effector/reflect';
import { changeTextModel } from "@src/features/change-text";
import { getThemeColors } from '@src/shared/libs/get-theme-colors';

type Props = {
  element: Element,
  text: string,
  onChangeText: (data: string) => void,
  onSubmitText: () => void,
}

const EditorView = ({ element, text, onChangeText, onSubmitText }: Props) => {
  const {
    width,
    height,
    x,
    y,
    fontSize,
    fontWeight,
    fontFamily,
    letterSpacing,
    color,
    lineHeight,
    textAlign
  } = element;

  const {
    background,
  } = getThemeColors();

  return (
    <Box
      position="relative"
      width="600px"
      height="720px"
      backgroundColor={background}
    >
      <Text
        weight={width}
        height={height}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        fontSize={fontSize}
        color={color}
        letterSpacing={letterSpacing}
        lineHeight={lineHeight}
        textAlign={textAlign}
        text={text}
        defaultText={element.text}
        onChangeText={onChangeText}
        onSubmitText={onSubmitText}
        x={x}
        y={y}
      />
    </Box>
  )
}

export const Editor = reflect({
  view: EditorView,
  bind: {
    element: elementsModel.$element,
    text: changeTextModel.$text,
    onSubmitText: changeTextModel.textSubmitted,
    onChangeText: changeTextModel.textChanged,
  },
});