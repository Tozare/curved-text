import React from "react";
import * as model from "../model";
import { reflect } from '@effector/reflect';
import { elementsConfig } from "@src/entities/elements";
import { Values } from '@src/shared/typings/object-values';
import { Box, Button } from '@chakra-ui/react';
import { getThemeColors } from '@src/shared/libs/get-theme-colors';

type Props = {
  activeType: Values<typeof elementsConfig.ELEMENT_TYPES>,
  onSwitchType: (type: Values<typeof elementsConfig.ELEMENT_TYPES>) => void,
}

const ChangeTextTypeSwitcherView = ({
  activeType,
  onSwitchType,
}: Props) => {


  console.log({
    activeType,
  })

  const {
    primaryButton,
    primaryText,
    border,
    subBackground,
  } = getThemeColors();

  return (
    <Box
      display="flex"
      flexDir="row"
      width="100%"
      justifyContent="space-between"
    >
      <Button
        background={subBackground}
        cursor="pointer"
        onClick={() => onSwitchType(elementsConfig.ELEMENT_TYPES.TEXT)}
        border={`1px solid ${activeType === elementsConfig.ELEMENT_TYPES.TEXT ? primaryButton : border}`}
        borderRadius="6px"
        width="130px"
        height="40px"
      >
        Original
      </Button>
      <Button
        background={subBackground}
        cursor="pointer"
        onClick={() => onSwitchType(elementsConfig.ELEMENT_TYPES.CURVED_TEXT)}
        border={`1px solid ${activeType === elementsConfig.ELEMENT_TYPES.CURVED_TEXT ? primaryButton : border}`}
        borderRadius="6px"
        width="130px"
        height="40px"
      >
        Curved
      </Button>
    </Box>
  )
}

export const ChangeTextTypeSwitcher = reflect({
  view: ChangeTextTypeSwitcherView,
  bind: {
    activeType: model.$textType,
    onSwitchType: model.textTypeSwitched,
  },
});