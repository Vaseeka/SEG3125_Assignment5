import { colors } from "../theme/colors";

export default function Checkmark({ checked, color = colors.checkBrown }) {
  return (
    <span
      style={{
        width: "15px",
        height: "15px",
        borderRadius: "3px",
        border: `1.5px solid ${checked ? color : colors.gray}`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        background: checked ? color : "transparent",
        transition: "all 0.12s",
      }}
    >
      {checked && (
        <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
          <path
            d="M1 3.5L3.2 5.7L8 1"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );
}
