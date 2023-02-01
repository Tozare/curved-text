import React, { useRef } from 'react';
import {
  Box,
  Image,
  Input,
  Editable,
  EditablePreview,
  EditableInput,
  EditableTextarea,
  Textarea,
} from '@chakra-ui/react';
import { ELEMENT_TYPES, TEXT_ALIGN_TYPES } from '@src/entities/elements/config';
import { Values } from '@src/shared/typings/object-values';
import { getThemeColors } from '@src/shared/libs/get-theme-colors';
import "./auto-resize-text-area.css";

type Props = {
  x: number,
  y: number,
  weight: number,
  height: number,
  fontFamily: string,
  fontWeight: number,
  fontSize: number,
  color: string,
  letterSpacing: number,
  lineHeight: number,
  textAlign: Values<typeof TEXT_ALIGN_TYPES>,
  defaultText: string,
  text: string,
  onChangeText: (text: string) => void,
  onSubmitText: () => void,
}

export const Text = ({
  weight,
  height,
  fontFamily,
  fontSize,
  fontWeight,
  color,
  letterSpacing,
  lineHeight,
  textAlign,
  text,
  onChangeText,
  onSubmitText,
  x,
  y,
}: Props) => {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const {
    primaryText,
  } = getThemeColors();
  return (
    <label className="input-sizer stacked">
      <Textarea
        position="absolute"
        left={`${x}px`}
        top={`${y}px`}
        ref={ref}
        value={text}
        display="block"
        padding="0px"
        margin="0px"
        textAlign={textAlign}
        // whiteSpace="nowrap"
        width={`${weight}px`}
        height={`${500}px`}
        resize="none"
        fontWeight={fontWeight}
        fontSize={`${fontSize}px`}
        color={color}
        letterSpacing={`${letterSpacing}px`}
        lineHeight={`${lineHeight}px`}
        fontFamily={fontFamily}
        boxShadow="none"
        borderRadius="0px"
        _focus={{ boxShadow: "none", borderRadius: 0 }}
        onChange={(e) => onChangeText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey){
            onSubmitText();
            ref.current!.blur();
          }
        }}
      />
    </label>
  )
  // return (
  //   <Editable
  //     position="absolute"
  //     left={`${x}px`}
  //     top={`${y}px`}
  //     value={text}
  //     textAlign={textAlign}
  //     width={`${weight}px`}
  //     height={`${1000}px`}
  //     overflowWrap={"break-word"}
  //     fontWeight={fontWeight}
  //     fontSize={`${fontSize}px`}
  //     color={color}
  //     letterSpacing={`${letterSpacing}px`}
  //     lineHeight={`${lineHeight}px`}
  //     fontFamily={fontFamily}
  //   >
  //     <EditablePreview />
  //     <EditableTextarea
  //       ref={ref}
  //       display="block"
  //       padding="0px"
  //       margin="0px"
  //       textAlign={textAlign}
  //       overflowWrap={"break-word"}
  //       width={`${1000}px`}
  //       height={`${1000}px`}
  //       resize="none"
  //       fontWeight={fontWeight}
  //       fontSize={`${fontSize}px`}
  //       color={color}
  //       letterSpacing={`${letterSpacing}px`}
  //       lineHeight={`${lineHeight}px`}
  //       fontFamily={fontFamily}
  //       _focus={{ boxShadow: "none", borderRadius: 0 }}
  //       onChange={(e) => onChangeText(e.target.value)}
  //       onKeyDown={(e) => {
  //         if (e.key === "Enter" && !e.shiftKey){
  //           onSubmitText();
  //           ref.current!.blur();
  //         }
  //       }}
  //     />
  //   </Editable>
  // );
}