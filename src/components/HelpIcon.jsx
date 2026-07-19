import { useState } from "react";
import { colors } from "../theme/colors";

export default function HelpIcon({ text }) {
  const [show, setShow] = useState(false);

  return (
    <span
      style={{ position: "relative", display: "inline-flex", marginLeft: "6px" }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex={0}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          border: `1.3px solid ${colors.textFainter}`,
          color: colors.textFainter,
          fontSize: "10px",
          fontWeight: 700,
          cursor: "help",
          flexShrink: 0,
          lineHeight: 1,
        }}
      >
        ?
      </span>
      <span
        style={{
          position: "absolute",
          bottom: "150%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#FFFFFF",
          color: colors.ink,
          padding: "9px 12px",
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: "7px",
          fontSize: "11.5px",
          fontWeight: 400,
          lineHeight: 1.4,
          width: "200px",
          textAlign: "left",
          opacity: show ? 1 : 0,
          visibility: show ? "visible" : "hidden",
          transition: "opacity 0.15s",
          boxShadow: "0 4px 12px rgba(0,0,0,0.14)",
          zIndex: 30,
          pointerEvents: "none",
        }}
      >
        {text}
        <span
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: "6px solid #FFFFFF",
          }}
        />
      </span>
    </span>
  );
}
