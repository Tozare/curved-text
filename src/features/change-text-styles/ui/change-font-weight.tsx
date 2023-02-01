import React from "react";
import { Box, Select } from "@chakra-ui/react";
import { reflect } from '@effector/reflect';
import { changeFontWeightModel } from "../model"
import { elementsConfig } from "@src/entities/elements";
import { SelectIcon } from '@src/features/change-text-styles/ui/icons';

type Props = {
  fontWeight: number,
  onChangeFontWeight: (data: number) => void,
}

const ChangeFontWeightView = ({ fontWeight, onChangeFontWeight }: Props) => {
  return (
    <Select
      value={fontWeight}
      onChange={(e) => onChangeFontWeight(+(e.target.value))}
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
        elementsConfig.DEFAULT_FONTS_WEIGHTS.map((defaultWeight) => {
          return <option key={defaultWeight} value={defaultWeight}>{elementsConfig.FONT_WEIGHT_TO_NAME[defaultWeight]}</option>
        })
      }
    </Select>
  )
}

export const ChangeFontWeight = reflect({
  view: ChangeFontWeightView,
  bind: {
    fontWeight: changeFontWeightModel.$fontWeight,
    onChangeFontWeight: changeFontWeightModel.fontWeightChanged,
  },
});

