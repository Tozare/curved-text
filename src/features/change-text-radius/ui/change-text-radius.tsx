import React, { useState } from 'react';
import * as model from "../model";
import { reflect } from '@effector/reflect';
import { elementsConfig } from "@src/entities/elements";
import { Values } from '@src/shared/typings/object-values';
import { Box, Button, Text } from '@chakra-ui/react';
import { getThemeColors } from '@src/shared/libs/get-theme-colors';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'
import * as config from "../config";

type Props = {
  curve: number,
  onMoveSlider: (value: number) => void,
  type: Values<typeof elementsConfig.ELEMENT_TYPES>,
  onStartDragging: () => void,
  onFinishDragging: () => void,
}

const ChangeTextTypeSwitcherView = ({
  onMoveSlider,
  curve,
  type,
  onFinishDragging,
  onStartDragging,
}: Props) => {

  const {
    primaryButton,
    primaryText,
    border,
    subBackground,
    subText,
  } = getThemeColors();

  if (type === elementsConfig.ELEMENT_TYPES.TEXT) {
    return null;
  }

  return (
    <>
      <Text
        marginBottom="11px"
        color={subText}
        fontSize="12px"
        lineHeight="14px"
      >
        Curve
      </Text>
      <Box
        marginBottom="10px"
      >
        <Box
          display="flex"
          flexDir="row"
          width="100%"
        >
          <Slider
            aria-label='slider-ex-4'
            defaultValue={30}
            min={config.MIN_RADIUS}
            max={config.MAX_RADIUS}
            step={config.STEP}
            onChange={(num) => {
              onMoveSlider(num);
            }}
            value={curve}
            onChangeStart={() => onStartDragging()}
            onChangeEnd={() => onFinishDragging()}
          >
            <SliderMark value={elementsConfig.MIN_CURVE}>
              {elementsConfig.MIN_CURVE}
            </SliderMark>
            <SliderMark value={0}>
              0
            </SliderMark>
            <SliderMark value={elementsConfig.MAX_CURVE}>
              {elementsConfig.MAX_CURVE}
            </SliderMark>
            <SliderMark value={curve}>
              {curve}
            </SliderMark>
            <SliderTrack bg='red.100' width="20px"   onMouseDown={() => {
              onStartDragging();
            }}
                         onMouseUp={() => onFinishDragging()}>
              {/*<SliderFilledTrack bg='tomato' width={`20px`}/>*/}
            </SliderTrack>
            <SliderThumb boxSize={3}>
            </SliderThumb>
          </Slider>
        </Box>
      </Box>
    </>
  )
}

export const ChangeTextRadius = reflect({
  view: ChangeTextTypeSwitcherView,
  bind: {
    type: model.$type,
    curve: model.$curve,
    onMoveSlider: model.curveSliderMoved,
    onFinishDragging: model.curvingChangeFinished,
    onStartDragging: model.curvingChangeStarted,
  },
});