import { colors } from "../theme/colors";

export default function TooltipBox({ children }) {
  return (
    <div
      style={{
        fontSize: "12.5px",
        background: "#FFFFFF",
        color: colors.ink,
        padding: "8px 12px",
        borderRadius: "7px",
        fontFamily: "'Work Sans', sans-serif",
        border: `1px solid ${colors.cardBorder}`,
        boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
      }}
    >
      {children}
    </div>
  );
}
