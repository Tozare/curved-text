import React, { useEffect } from 'react';
// import { Editor } from '@src/widgets/editor';
import { Box, Spinner, Text } from '@chakra-ui/react';
import { getThemeColors } from '@src/shared/libs/get-theme-colors';
import { reflect } from '@effector/reflect';
type Props = {}

const HomePageView = ({ }: Props) => {

  const {
    subBackground
  } = getThemeColors();

  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundColor={subBackground}
      display="flex"
      flexDirection="row"
    >
      <Box
        height="100%"
        flexGrow={1}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        {/*<Editor />*/}
      </Box>
    </Box>
  );
}

export const HomePage = reflect({
  view: HomePageView,
  bind: {},
});