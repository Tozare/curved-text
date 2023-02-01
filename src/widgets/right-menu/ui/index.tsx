import React from "react";
import { Box, Text } from "@chakra-ui/react"
import { getThemeColors } from '@src/shared/libs/get-theme-colors';
import {
  ChangeColor,
  ChangeFontWeight,
  ChangeFontSize,
  ChangeLetterSpacing,
  SaveChanges,
  ChangeLineHeight,
  ChangeTextAlign,
  ChangeFontFamily,
} from "@src/features/change-text-styles";
import { elementsConfig, elementsModel } from "@src/entities/elements";
import { InputsContainer } from '@src/shared/ui/inputs-container';
type Props = {
  
}

export const RightMenu = ({}: Props) => {

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
        TEXT
      </Text>
      <Box
        marginBottom="10px"
      >
        <InputsContainer
          inputs={[<ChangeFontFamily />]}
          inputsWidths={["210px"]}
        />
      </Box>
      <Box
        marginBottom="10px"
      >
        <InputsContainer
          inputs={[<ChangeFontWeight />, <ChangeFontSize/>]}
          inputsWidths={["134px", "75px"]}
        />
      </Box>
      <Box
        marginBottom="10px"
      >
        <InputsContainer
          inputs={[<ChangeColor />]}
          inputsWidths={["210px"]}
        />
      </Box>
      <Box
        marginBottom="10px"
      >
        <InputsContainer
          inputs={[<ChangeLineHeight />, <ChangeLetterSpacing />]}
          inputsWidths={["104.5px", "104.5px"]}
        />
      </Box>
      <Box
        marginBottom="10px"
      >
        <InputsContainer
          inputs={Object.values(elementsConfig.TEXT_ALIGN_TYPES).map((currentTextAlign) => {
            return <ChangeTextAlign currentTextAlign={currentTextAlign} />
          })}
          inputsWidths={Object.values(elementsConfig.TEXT_ALIGN_TYPES).map((currentTextAlign) => {
            return `${210/Object.keys(elementsConfig.TEXT_ALIGN_TYPES).length}px`
          })}
        />
      </Box>
      <SaveChanges />
    </Box>
  )
}