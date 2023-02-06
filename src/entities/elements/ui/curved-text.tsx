import React, { useEffect, useState } from 'react';
import { TextPath, Path, Circle } from 'react-konva';
import { dataPathLib, textLib, rotationLib } from "@src/shared/libs";
import * as elementsConfig from "../config";
import * as lib from "../lib";
import { Html } from 'react-konva-utils';

type Props = {
  id: string,
  width: number,
  height: number,
  x: number,
  y: number,
  text: string,
  fill: string,
  radius: number,
  fontFamily: string,
  fontWeight: number,
  fontStyle: string,
  fontSize: number,
  letterSpacing: number,
  lineHeight: number,
  curve: number,
  path: string,
  isInputModeOpened: boolean,
  onDoubleClick: () => void,
  onMove: (e: { x: number, y: number }) => void,
  isCurveTextMoving: boolean,
  curveTextMovingStarted: () => void,
  curveTextMovingFinished: () => void,
}
export const CurvedText = ({
  id,
  width,
  height,
  x,
  y,
  text,
  fill,
  // radius,
  fontStyle,
  fontWeight,
  fontFamily,
  fontSize,
  letterSpacing,
  lineHeight,
  curve,
  path,
  isInputModeOpened,
  onDoubleClick,
  onMove,
  isCurveTextMoving,
  curveTextMovingFinished,
  curveTextMovingStarted,
}: Props) => {
  const deltaX = lib.getRadiusByCurve({ curve, fontSize }) - (width/2);
  const w = lib.getRadiusByCurve({ curve, fontSize }) * 2;
  const difRadius = (curve < 0 ? fontSize : 0);

  const onPointerUp = () => {
    curveTextMovingFinished();
  }

  const onMovePointer = (e: PointerEvent) => {
    if (isCurveTextMoving) {
      onMove({ x: x + e.movementX, y: y + e.movementY })
    }
  }

  useEffect(() => {
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointermove', onMovePointer);
    return () => {
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointermove', onMovePointer);
    }
  }, [isCurveTextMoving, x, y]);

  return (
    <>
      <Html
        divProps={{
          style: {
            position: 'absolute',
            width: `${width}px`,
            height: `${height}px`,
            top: `${y + (curve < 0 ? 0 : 0)}px`,
            //left: `${x - deltaX - (curve > 0 ? fontSize/2 : 0)}px`,
            left: `${x - (curve === 0 ? 0 : deltaX) - (curve > 0 ? fontSize/2 : 0)}px`,
            // left: `${x}px`,
            opacity: isInputModeOpened ? 0.2 : 1,
            // backgroundColor: "blue",
            // opacity: 0.5,
          },
        }}
      >
        <div
          style={{ width: "100%", height: "100%" }}
          onDoubleClick={() => {
            onDoubleClick()
          }}
          onPointerDown={() => {
            curveTextMovingStarted();
          }}
        >
          <svg style={{ pointerEvents: "none", userSelect: "none" }} width={w+fontSize + difRadius + (curve === 0 ? 10000 : 0)} height={w+fontSize + difRadius} viewBox={`0 0 ${w+fontSize + difRadius + (curve === 0 ? 10000 : 0)} ${w+fontSize + difRadius}`} xmlns="http://www.w3.org/2000/svg">
            <path
              id="curved-text-path"
              fill="none"
              d={path}
            />
            <text>
              <textPath
                style={{ pointerEvents: "none", userSelect: "none" }}
                href="#curved-text-path"
                color={fill}
                spacing={letterSpacing}
                fontStyle={fontStyle}
                fontSize={`${fontSize}px`}
                fontWeight={`${fontWeight}px`}
                letterSpacing={`${letterSpacing}px`}
                fontFamily={fontFamily}
              >
                {text}
              </textPath>
            </text>
          </svg>
        </div>
      </Html>
    </>
  )
}


// import React, { useEffect, useState } from 'react';
// import { TextPath, Path, Circle, Image } from 'react-konva';
// import { dataPathLib, textLib, rotationLib } from "@src/shared/libs";
// import * as elementsConfig from "../config";
// import * as lib from "../lib";
// import { Html } from 'react-konva-utils';
// import Konva from 'konva';
// import KonvaEventObject = Konva.KonvaEventObject;
// import useImage from 'use-image';
//
// type Props = {
//   id: string,
//   width: number,
//   height: number,
//   x: number,
//   y: number,
//   text: string,
//   fill: string,
//   radius: number,
//   fontFamily: string,
//   fontWeight: number,
//   fontStyle: string,
//   fontSize: number,
//   letterSpacing: number,
//   lineHeight: number,
//   curve: number,
//   path: string,
//   isInputModeOpened: boolean,
//   onDoubleClick: () => void,
//   onMove: (e: { x: number, y: number }) => void,
// }
// export const CurvedText = ({
//   id,
//   width,
//   height,
//   x,
//   y,
//   text,
//   fill,
//   // radius,
//   fontStyle,
//   fontWeight,
//   fontFamily,
//   fontSize,
//   letterSpacing,
//   lineHeight,
//   curve,
//   path,
//   isInputModeOpened,
//   onDoubleClick,
//   onMove,
// }: Props) => {
//   const deltaX = lib.getRadiusByCurve({ curve, fontSize }) - (width/2);
//   const w = lib.getRadiusByCurve({ curve, fontSize }) * 2;
//   const difRadius = (curve < 0 ? fontSize : 0);
//   const [url, setUrl] = useState("");
//   // const [image] = useImage('data:image/svg+xml;base64,' +  window.btoa(path));\
//   console.log(url);
//   const [image] = useImage(url);
//   useEffect(() => {
//     let svgString = `
//        <svg width="${w+fontSize + difRadius + (curve === 0 ? 10000 : 0)}" height="${w+fontSize + difRadius}" viewBox="0 0 ${w + fontSize + difRadius + (curve === 0 ? 10000 : 0)} ${w + fontSize + difRadius}" xmlns="http://www.w3.org/2000/svg">
//             <path
//               id="curved-text-path"
//               fill="none"
//               d="${path}"
//             />
//             <text>
//               <textPath
//                 href="#curved-text-path"
//                 style="fill: green; spacing: ${letterSpacing}; font-style: ${fontStyle}; fontSize: ${fontSize}px; fontWeight: ${fontWeight}; letterSpacing: ${letterSpacing}px; fontFamily: ${fontFamily}"
//               >
//                 ${text}
//               </textPath>
//             </text>
//           </svg>
//     `
//     // color="${fill}"
//     // spacing="${letterSpacing}"
//     // fontStyle="${fontStyle}"
//     // fontSize="${fontSize}px"
//     // fontWeight="${fontWeight}"
//     // letterSpacing="${letterSpacing}px"
//     // fontFamily="${fontFamily}"
//     console.log(svgString);
//     const url =  'data:image/svg+xml;base64,' + window.btoa(svgString);
//     console.log(url);
//     setUrl(url);
//   }, [])
//
//   useEffect(() => {
//     if (url) {
//       setUrl(path)
//     }
//   }, [path])
//
//   return (
//     <>
//       <Image
//         id={id}
//         draggable={false}
//         x={x - (curve === 0 ? 0 : deltaX) - (curve > 0 ? fontSize/2 : 0)}
//         y={y}
//         image={image || null}
//         // height={height}
//         // width={width}
//         // image={image}
//         // fill={"green"}
//       />
//       {/*<Html*/}
//       {/*  transform*/}
//       {/*  transformFunc={(e) => {*/}
//       {/*    console.log(e);*/}
//       {/*    return e;*/}
//       {/*  }}*/}
//       {/*  divProps={{*/}
//       {/*    style: {*/}
//       {/*      position: 'absolute',*/}
//       {/*      width: `${width}px`,*/}
//       {/*      height: `${height}px`,*/}
//       {/*      top: `${y + (curve < 0 ? 0 : 0)}px`,*/}
//       {/*      //left: `${x - deltaX - (curve > 0 ? fontSize/2 : 0)}px`,*/}
//       {/*      left: `${x - (curve === 0 ? 0 : deltaX) - (curve > 0 ? fontSize/2 : 0)}px`,*/}
//       {/*      // left: `${x}px`,*/}
//       {/*      opacity: isInputModeOpened ? 0.5 : 1,*/}
//       {/*      // backgroundColor: "blue",*/}
//       {/*      // opacity: 0.5,*/}
//       {/*    },*/}
//       {/*  }}*/}
//       {/*>*/}
//       {/*  <div*/}
//       {/*    style={{ width: "100%", height: "100%" }}*/}
//       {/*    // onDoubleClick={() => {*/}
//       {/*    //   onDoubleClick()*/}
//       {/*    // }}*/}
//       {/*    onDrag={(e) => {*/}
//       {/*      console.log(e);*/}
//       {/*    }}*/}
//       {/*  >*/}
//       {/*    <svg width={w+fontSize + difRadius + (curve === 0 ? 10000 : 0)} height={w+fontSize + difRadius} viewBox={`0 0 ${w+fontSize + difRadius + (curve === 0 ? 10000 : 0)} ${w+fontSize + difRadius}`} xmlns="http://www.w3.org/2000/svg">*/}
//       {/*      <path*/}
//       {/*        id="curved-text-path"*/}
//       {/*        fill="none"*/}
//       {/*        d={path}*/}
//       {/*      />*/}
//       {/*      <text>*/}
//       {/*        <textPath*/}
//       {/*          href="#curved-text-path"*/}
//       {/*          color={fill}*/}
//       {/*          spacing={letterSpacing}*/}
//       {/*          fontStyle={fontStyle}*/}
//       {/*          fontSize={`${fontSize}px`}*/}
//       {/*          fontWeight={`${fontWeight}px`}*/}
//       {/*          letterSpacing={`${letterSpacing}px`}*/}
//       {/*          fontFamily={fontFamily}*/}
//       {/*        >*/}
//       {/*          {text}*/}
//       {/*        </textPath>*/}
//       {/*      </text>*/}
//       {/*    </svg>*/}
//       {/*  </div>*/}
//       {/*</Html>*/}
//     </>
//   )
// }