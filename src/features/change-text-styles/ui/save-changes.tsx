import React from "react";
import { Button } from '@chakra-ui/react';
import { reflect } from '@effector/reflect';
import { saveChangesModel } from "../model";
import { getThemeColors } from '@src/shared/libs/get-theme-colors';

type Props = {
  onSave: () => void,
}

const SaveChangesView = ({ onSave }: Props) => {

  const {
    primaryButton,
    primaryButtonColor,
  } = getThemeColors();

  return (
    <Button
      onClick={() => onSave()}
      width="210px"
      height="40px"
      fontWeight={600}
      fontSize="13px"
      borderRadius="4px"
      backgroundColor={primaryButton}
      color={primaryButtonColor}
    >
      Apply Changes
    </Button>
  );
}

export const SaveChanges = reflect({
  view: SaveChangesView,
  bind: {
    onSave: saveChangesModel.changesSaved,
  }
});