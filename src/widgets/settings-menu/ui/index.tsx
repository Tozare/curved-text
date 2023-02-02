import React from "react";
import { Box, Text } from "@chakra-ui/react"
import { getThemeColors } from '@src/shared/libs/get-theme-colors';
import { ChangeTextTypeSwitcher } from "@src/features/change-text-type";
type Props = {

}

export const SettingsMenu = ({}: Props) => {

  const {
    background,
    subText,
  } = getThemeColors();

  return (
    <Box
      width="240px"
      height="100vh"
      paddingY="17px"
      paddingLeft="16px"
      paddingRight="15px"
      backgroundColor={background}
    >
      <Text
        marginBottom="11px"
        color={subText}
        fontSize="12px"
        lineHeight="14px"
      >
        Text Effects
      </Text>
      <Box
        marginBottom="10px"
      >
        <ChangeTextTypeSwitcher />
      </Box>
    </Box>
  )
}