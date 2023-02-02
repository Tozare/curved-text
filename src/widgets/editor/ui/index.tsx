import { Box } from "@chakra-ui/react";
import React from "react";
import { reflect } from '@effector/reflect';
import { getThemeColors } from '@src/shared/libs/get-theme-colors';
import { Stage, Layer, Rect, Text, Circle, Line, TextPath, Path } from 'react-konva';

type Props = {}

const EditorView = ({  }: Props) => {

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
      <Stage width={600} height={720}>
        <Layer>
          <Text text="Some text on canvas" fontSize={15} />
          <Rect
            x={x}
            y={y}
            width={2*radius}
            height={2*radius}
            fill="red"
            shadowBlur={10}
          />
          <Circle x={200} y={100} radius={50} fill="green" />
          <TextPath fill="black" width={2 * radius} height={2 * radius} x={x} y={y} text={text} data={path}/>
        </Layer>
      </Stage>
    </Box>
  )
}

export const Editor = reflect({
  view: EditorView,
  bind: {
  },
});