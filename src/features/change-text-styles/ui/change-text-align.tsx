import React from "react";
import {
  Box,
  Select,
  Text,
  Input,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";
import { reflect } from '@effector/reflect';
import { changeTextAlignModel } from "../model"
import { elementsConfig } from "@src/entities/elements";
import { getThemeColors } from "@src/shared/libs/get-theme-colors";
import { AlignLeftIcon, AlignJustifyIcon, AlignRightIcon, AlignCenterIcon } from "./icons";

type Props = {
  textAlign: string,
  onChangeTextAlign: (data: string) => void,
  currentTextAlign: string,
}

const ChangeTextAlignView = ({ textAlign, onChangeTextAlign, currentTextAlign }: Props) => {

  const {
    subIcon,
    primaryText,
    subText,
    primaryIcon
  } = getThemeColors();

  return (
    <Box
      width="100%"
      paddingX="10px"
      height="40px"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        cursor="pointer"
        onClick={() => {
          onChangeTextAlign(currentTextAlign);
        }}
      >
        {
          currentTextAlign === elementsConfig.TEXT_ALIGN_TYPES.LEFT
          && (
            <AlignLeftIcon fill={textAlign === currentTextAlign ? primaryIcon : subIcon} />
          )
        }
        {
          currentTextAlign === elementsConfig.TEXT_ALIGN_TYPES.RIGHT
          && (
            <AlignRightIcon fill={textAlign === currentTextAlign ? primaryIcon : subIcon} />
          )
        }
        {
          currentTextAlign === elementsConfig.TEXT_ALIGN_TYPES.CENTER
          && (
            <AlignCenterIcon fill={textAlign === currentTextAlign ? primaryIcon : subIcon} />
          )
        }
        {
          currentTextAlign === elementsConfig.TEXT_ALIGN_TYPES.LEFT_RIGHT
          && (
            <AlignJustifyIcon fill={textAlign === currentTextAlign ? primaryIcon : subIcon} />
          )
        }
      </Box>
    </Box>
  )
}

export const ChangeTextAlign = reflect({
  view: ChangeTextAlignView,
  bind: {
    textAlign: changeTextAlignModel.$textAlign,
    onChangeTextAlign: changeTextAlignModel.textAlignChanged,
  },
});

