import { Box } from "@chakra-ui/react";
import React from "react";
import { reflect } from '@effector/reflect';
import { getThemeColors } from '@src/shared/libs/get-theme-colors';
import { Stage, Layer, Rect, Text, Circle, Line, TextPath, Path } from 'react-konva';
import { ElementNode } from "./element-node";
import { elementsModel, CurvedText, Element, CurvedTextElement, Selection } from '@src/entities/elements';
import { ChangeText, changeTextModel } from "@src/features/change-text";
import { RadiusPreview } from '@src/features/change-text-radius';
import { moveElementModel } from "@src/features/move-element";
import Konva from 'konva';
import KonvaEventObject = Konva.KonvaEventObject;
type Props = {
  element: Element,
  onOpenInputMode: () => void,
  isInputModeOpened: boolean,
  onMove: (data: { x: number, y: number }) => void,
  isCurveTextMoving: boolean,
  curveTextMovingStarted: () => void,
  curveTextMovingFinished: () => void,
}

const EditorView = ({ element, onOpenInputMode, isInputModeOpened, onMove, isCurveTextMoving, curveTextMovingFinished, curveTextMovingStarted }: Props) => {

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
        width={"600px"} height={"720px"}
        overflow="hidden"
        // onPointerUp={() => {
        //   curveTextMovingFinished();
        // }}
        // onPointerMove={(e) => {
        //   if (isCurveTextMoving) {
        //     console.log("isCurveTextMoving");
        //     // console.log(e.movementX)
        //     onMove({ x: x + e.movementX, y: y + e.movementY })
        //   }
        //   // console.log(e);
        // }}
      >
        <Stage width={600} height={720}>
          <Layer>
            <ElementNode
              isCurveTextMoving={isCurveTextMoving}
              curveTextMovingStarted={curveTextMovingStarted}
              curveTextMovingFinished={curveTextMovingFinished}
              onMove={onMove} element={element} isInputModeOpened={isInputModeOpened} onDoubleClick={onOpenInputMode}/>
          </Layer>
          <Layer>
            <RadiusPreview
              width={width}
              height={height}
              fontSize={fontSize}
              curve={curve}
              x={x}
              y={y}
              path={path}
            />
            <Selection
              width={width}
              height={height}
              x={x}
              y={y}
              onDoubleClick={() => onOpenInputMode()}
              isInputModeOpened={isInputModeOpened}
              onMove={onMove}
            />
            <ChangeText
              fontStyle={element.fontStyle}
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
          </Layer>
        </Stage>
      </Box>
    </Box>
  )
}

export const Editor = reflect({
  view: EditorView,
  bind: {
    element: elementsModel.$element,
    onOpenInputMode: changeTextModel.inputModeOpened,
    isInputModeOpened: changeTextModel.$isInputModeOpened,
    onMove: moveElementModel.elementDragged,
    isCurveTextMoving: moveElementModel.$isCurveTextMoving,
    curveTextMovingFinished: moveElementModel.curveTextMovingFinished,
    curveTextMovingStarted: moveElementModel.curveTextMovingStarted,
  },
});