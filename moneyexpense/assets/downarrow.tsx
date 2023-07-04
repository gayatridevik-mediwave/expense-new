import * as React from "react"
import Svg, {
  Path,
  G,
  Rect,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function DownArrow(props: any) {
  return (
    <Svg
      width={13}
      height={6}
      viewBox="0 0 13 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#626262" d="M0 0H13V6H0z" />
      <G clipPath="url(#clip0_174_4722)">
        <Path
          transform="translate(-92 -340)"
          fill="#fff"
          d="M0 0H430V1029H0z"
        />
        <Path
          d="M570 193.367C399.755 934.185 421.702 466.165 230.611 466.165 39.521 466.165-122 489.042-122 193.367S32.91-342 224-342c191.091 0 346 239.692 346 535.367z"
          fill="#F4F4F4"
        />
        <Path
          d="M570-168.633C399.755 572.185 421.702 104.165 230.611 104.165 39.521 104.165-122 127.042-122-168.633S32.91-704 224-704c191.091 0 346 239.692 346 535.367z"
          fill="url(#paint0_linear_174_4722)"
        />
        <G filter="url(#filter0_d_174_4722)">
          <Rect
            x={-71}
            y={-157}
            width={390}
            height={686.593}
            rx={20}
            fill="#FEFEFE"
          />
        </G>
        <G filter="url(#filter1_d_174_4722)">
          <Path
            d="M-31-24.5h310a9.5 9.5 0 019.5 9.5v34a9.5 9.5 0 01-9.5 9.5H-31a9.5 9.5 0 01-9.5-9.5v-34a9.5 9.5 0 019.5-9.5z"
            fill="#fff"
            stroke="#08979D"
          />
        </G>
        <G clipPath="url(#clip1_174_4722)">
          <Path d="M0 0l6.5 6L13 0H0z" fill="#08979D" />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_174_4722"
          x1={-169}
          y1={-431.5}
          x2={373.5}
          y2={199}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.425702} stopColor="#08979D" />
          <Stop offset={0.9998} stopColor="#48376A" stopOpacity={0.0257815} />
          <Stop offset={0.9999} stopColor="#521CC2" stopOpacity={0.0104167} />
          <Stop offset={1} stopColor="#521CC2" stopOpacity={0.0104167} />
          <Stop offset={1} stopColor="#521CC2" stopOpacity={0.0104167} />
          <Stop offset={1} stopColor="#521CC2" stopOpacity={0.0104167} />
          <Stop offset={1} stopColor="#46346E" stopOpacity={0.10767} />
        </LinearGradient>
        <ClipPath id="clip0_174_4722">
          <Path
            fill="#fff"
            transform="translate(-92 -340)"
            d="M0 0H430V1029H0z"
          />
        </ClipPath>
        <ClipPath id="clip1_174_4722">
          <Path fill="#fff" d="M0 0H13V6H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DownArrow
