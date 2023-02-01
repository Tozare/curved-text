import React from "react";
import { Box, Select } from "@chakra-ui/react";
import { reflect } from '@effector/reflect';
import { changeFontFamilyModel } from "../model"
import { elementsConfig } from "@src/entities/elements";
import { SelectIcon } from '@src/features/change-text-styles/ui/icons';

type Props = {
  fontFamily: string,
  onChangeFontFamily: (data: string) => void,
}

const ChangeFontFamilyView = ({ fontFamily, onChangeFontFamily }: Props) => {
  return (
    <Select
      value={fontFamily}
      onChange={(e) => onChangeFontFamily(e.target.value)}
      width="100%"
      height="40px"
      boxShadow="none"
      borderRadius="0px"
      border="none"
      _focus={{ boxShadow: "none", borderRadius: 0, border: "none" }}
      icon={<SelectIcon fill={""} />}
      fontSize="12px"
      fontWeight={400}
    >
      {
        elementsConfig.DEFAULT_FONTS.map((defaultFont) => {
          return <option key={defaultFont} value={defaultFont}>{defaultFont}</option>
        })
      }
    </Select>
  )
}

export const ChangeFontFamily = reflect({
  view: ChangeFontFamilyView,
  bind: {
    fontFamily: changeFontFamilyModel.$fontFamily,
    onChangeFontFamily: changeFontFamilyModel.fontFamilyChanged,
  },
});

