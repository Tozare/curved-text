import React from "react";
import { Box, Select, FormLabel } from "@chakra-ui/react";
import { reflect } from '@effector/reflect';
import { changeFontFamilyModel, changeColorModel } from "../model"
import { elementsConfig } from "@src/entities/elements";
import { SelectIcon } from '@src/features/change-text-styles/ui/icons';
import { DEFAULT_COLORS } from '@src/entities/elements/config';

type Props = {
  color: string,
  onChangeColor: (data: string) => void,
}

const ChangeFontFamilyView = ({ color, onChangeColor }: Props) => {
  return (
    <Box width="100%" height="40px" position="relative">
      <FormLabel
        top="-1px"
        height="40px"
        zIndex={3}
        left="10px"
        htmlFor="name"
        // color
        fontWeight="400"
        fontSize="12px"
        mb="10px"
        position="absolute"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          backgroundColor={color}
          width="18px"
          height="18px"
          borderRadius="3px"
        >
        </Box>
      </FormLabel>
      <Select
        value={color}
        onChange={(e) => onChangeColor(e.target.value)}
        width="100%"
        height="40px"
        paddingLeft="30px"
        boxShadow="none"
        borderRadius="0px"
        border="none"
        _focus={{ boxShadow: "none", borderRadius: 0, border: "none" }}
        icon={<SelectIcon fill={""} />}
        fontSize="12px"
        fontWeight={400}
      >
        {
          elementsConfig.DEFAULT_COLORS.map((defaultColor) => {
            return <option key={defaultColor} value={defaultColor}>{defaultColor}</option>
          })
        }
      </Select>
    </Box>
  )
}

export const ChangeColor = reflect({
  view: ChangeFontFamilyView,
  bind: {
    color: changeColorModel.$color,
    onChangeColor: changeColorModel.colorChanged,
  },
});

