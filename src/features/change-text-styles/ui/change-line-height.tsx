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
import { changeLineHeightModel, changeFontSizeModel } from "../model"
import { elementsConfig } from "@src/entities/elements";
import { getThemeColors } from "@src/shared/libs/get-theme-colors";
import { LineHeightIcon } from "./icons";

type Props = {
  lineHeight: number,
  fontSize: number,
  onChangeLineHeight: (data: number) => void,
}

const ChangeLineHeightView = ({ fontSize, lineHeight, onChangeLineHeight }: Props) => {

  const {
    subIcon,
    primaryText,
    subText,
  } = getThemeColors();

  return (
    <Box
      width="100%"
      paddingX="10px"
      height="40px"
      display="flex"
      flexDirection="row"
      alignItems="center"
    >
      <LineHeightIcon fill={subIcon} />
      <Editable
        value={`${Math.round((lineHeight/fontSize)*100)}`}
        width="30px"
        marginLeft="10px"
        color={primaryText}
        fontSize="12px"
        boxShadow="none"
        borderRadius="0px"
        border="none"
        _focus={{ boxShadow: "none", borderRadius: 0, border: "none" }}
      >
        <EditablePreview/>
        <EditableInput
          color={primaryText}
          fontSize="12px"
          width="30px"
          onChange={(e) => onChangeLineHeight((+e.target.value * fontSize)/100)}
          boxShadow="none"
          borderRadius="0px"
          border="none"
          _focus={{ boxShadow: "none", borderRadius: 0, border: "none" }}
        />
      </Editable>
      <Text
        marginLeft="auto"
        color={subText}
        fontSize="12px"
      >
        %
      </Text>
    </Box>
  )
}

export const ChangeLineHeight = reflect({
  view: ChangeLineHeightView,
  bind: {
    lineHeight: changeLineHeightModel.$lineHeight,
    onChangeLineHeight: changeLineHeightModel.lineHeightChanged,
    fontSize: changeFontSizeModel.$fontSize,
  },
});

