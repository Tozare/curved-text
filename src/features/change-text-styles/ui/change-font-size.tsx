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
import { changeFontSizeModel } from "../model"
import { elementsConfig } from "@src/entities/elements";
import { getThemeColors } from "@src/shared/libs/get-theme-colors";
import { TextIcon } from "./icons";

type Props = {
  fontSize: number,
  onChangeFontSize: (data: number) => void,
}

const ChangeFontSizeView = ({ fontSize, onChangeFontSize }: Props) => {

  const {
    subIcon,
    primaryText,
  } = getThemeColors();

  return (
   <Box
    width="100%"
    paddingLeft="10px"
    height="40px"
    display="flex"
    flexDirection="row"
    alignItems="center"
   >
     <TextIcon fill={subIcon} />
     <Editable
       value={`${fontSize}`}
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
         onChange={(e) => onChangeFontSize(+e.target.value)}
         boxShadow="none"
         borderRadius="0px"
         border="none"
         _focus={{ boxShadow: "none", borderRadius: 0, border: "none" }}
       />
     </Editable>
   </Box>
  )
}

export const ChangeFontSize = reflect({
  view: ChangeFontSizeView,
  bind: {
    fontSize: changeFontSizeModel.$fontSize,
    onChangeFontSize: changeFontSizeModel.fontSizeChanged,
  },
});

