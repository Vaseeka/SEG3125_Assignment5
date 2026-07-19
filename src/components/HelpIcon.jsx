import { useState, useRef, useLayoutEffect } from "react";
import { colors } from "../theme/colors";

const VIEWPORT_MARGIN = 8;

export default function HelpIcon({ text }) {
  const [show, setShow] = useState(false);
  const wrapRef = useRef(null);
  const bubbleRef = useRef(null);

  const [bubbleLeft, setBubbleLeft] = useState(null);
  const [arrowLeft, setArrowLeft] = useState(null);

  useLayoutEffect(() => {
    if (!show || !wrapRef.current || !bubbleRef.current) return;

    const wrapRect = wrapRef.current.getBoundingClientRect();
    const bubbleWidth = bubbleRef.current.getBoundingClientRect().width;

    // Where the bubble would sit if perfectly centered on the icon
    const idealLeft = wrapRect.left + wrapRect.width / 2 - bubbleWidth / 2;

    // Clamp so it never goes past either edge of the viewport
    const minLeft = VIEWPORT_MARGIN;
    const maxLeft = window.innerWidth - VIEWPORT_MARGIN - bubbleWidth;
    const clampedLeft = Math.min(Math.max(idealLeft, minLeft), maxLeft);

    setBubbleLeft(clampedLeft - wrapRect.left);

    // Keep the little arrow pointing at the icon even if the bubble
    // itself had to shift to stay on-screen
    const iconCenter = wrapRect.left + wrapRect.width / 2;
    setArrowLeft(iconCenter - clampedLeft);
  }, [show]);

  return (
    <span
      ref={wrapRef}
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
        ref={bubbleRef}
        style={{
          position: "absolute",
          bottom: "150%",
          left: bubbleLeft !== null ? `${bubbleLeft}px` : "50%",
          transform: bubbleLeft !== null ? "none" : "translateX(-50%)",
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
          textTransform: "none",
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
            left: arrowLeft !== null ? `${arrowLeft}px` : "50%",
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