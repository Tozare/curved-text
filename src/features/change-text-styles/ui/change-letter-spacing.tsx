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
import { changeLetterSpacingModel } from "../model"
import { elementsConfig } from "@src/entities/elements";
import { getThemeColors } from "@src/shared/libs/get-theme-colors";
import { LetterSpacingIcon } from "./icons";

type Props = {
  letterSpacing: number,
  onChangeLetterSpacing: (data: number) => void,
}

const ChangeLetterSpacingView = ({ letterSpacing, onChangeLetterSpacing }: Props) => {

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
      <LetterSpacingIcon fill={subIcon} />
      <Editable
        value={`${letterSpacing}`}
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
          onChange={(e) => onChangeLetterSpacing(+e.target.value)}
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
        px
      </Text>
    </Box>
  )
}

export const ChangeLetterSpacing = reflect({
  view: ChangeLetterSpacingView,
  bind: {
    letterSpacing: changeLetterSpacingModel.$letterSpacing,
    onChangeLetterSpacing: changeLetterSpacingModel.letterSpacingChanged,
  },
});

