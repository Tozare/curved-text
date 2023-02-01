import { Box } from "@chakra-ui/react";
import React from "react";
import { getThemeColors } from '@src/shared/libs/get-theme-colors';

type Props = {
  inputs: React.ReactNode[],
  inputsWidths: string[],
}

export const InputsContainer = ({ inputs, inputsWidths }: Props) => {

  const {
    border,
  } = getThemeColors();

  return (
    <Box
      display="flex"
      flexDir="row"
      alignItems="center"
      height="40px"
      width="210px"
      borderRadius="4px"
      border={`1px solid ${border}`}
    >
      {
        inputs.map((input, index) => {
          return (
            <Box width={inputsWidths[index]} height="100%" display="flex">
              {input}
              {
                index < inputs.length -1
                && (
                  <Box width="1px" height="100%" backgroundColor={border} />
                )
              }
            </Box>
          )
        })
      }
    </Box>
  )
}