import React from "react"
import { ResponsiveValue, Textarea, useOutsideClick, Box } from "@chakra-ui/react";
import { reflect } from "@effector/reflect";
import { useStore } from "effector-react";
import { ChangeEvent, useEffect, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import * as model from "../model";
import { elementsModel } from "@src/entities/elements";
import { getThemeColors } from '@src/shared/libs/get-theme-colors';
import { Html } from 'react-konva-utils';


type Props = {
  text: string,
  onChange: (text: string) => void,
  lineHeight: number,
  fontFamily: string,
  fontSize: number,
  textAlign: string,
  fill: string,
  width: number,
  height: number,
  letterSpacing: number,
  x: number,
  y: number,
  fontWeight: number,
  onInputModeClose: () => void,
  isInputModeOpened: boolean,
  fontStyle: string,
}

export const View = ({
  fill,
  lineHeight,
  fontFamily,
  fontSize,
  letterSpacing,
  textAlign,
  fontStyle,
  width,
  height,
  x,
  y,
  onChange,
  fontWeight,
  onInputModeClose,
  isInputModeOpened,
  text,
}: Props) => {

  const {
    primary,
  } = getThemeColors();

  if (!isInputModeOpened) {
    return null;
  }
  const ref = useRef<HTMLTextAreaElement>(null);

  useOutsideClick({
    ref,
    handler: onInputModeClose,
  });

  useEffect(() => {
    console.log(ref.current);
    if (ref.current) {
      const textarea = ref.current;
      textarea.focus();
    }
  }, [ref]);

  return (
    <Html
      divProps={{
        style: {
          position: 'absolute',
          top: `${y}px`,
          left: `${x}px`,
          width: `${width}px`,
          height: `${height}px`,
          boxSizing: "content-box",
          border: `1px solid ${primary}`,
        },
      }}
    >
      <Box
        // transformOrigin="left top"
        // position="absolute"
        // top={`${y - 5}px`}
        // left={`${x - 5}px`}
        // width={`${width + 10}px`}
        // height={`${height + 10}px`}
        // border={`2px solid ${primary}`}
      >
        <TextareaAutosize
          ref={ref}
          value={text}
          onFocus={(e) => {
            e.target.select();
          }}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: `${width}px`,
            outline: "none",
            background: "transparent",
            resize: "none",
            padding: "0px",
            margin: "0px",
            lineHeight: `${lineHeight}px`,
            fontFamily: `${fontFamily}px`,
            letterSpacing: `${letterSpacing}px`,
            fontSize: `${fontSize + 1}px`,
            fontWeight: fontWeight,
            fontStyle: fontStyle,
            color: `${fill}`,
          }}
        />
      </Box>
    </Html>
  );
};

export const ChangeText = reflect({
  view: View,
  bind: {
    onChange: model.textChanged,
    text: model.$text,
    onInputModeClose: model.inputModeClosed,
    isInputModeOpened: model.$isInputModeOpened,
  },
});
