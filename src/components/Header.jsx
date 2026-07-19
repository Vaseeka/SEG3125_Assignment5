import { colors } from "../theme/colors";

export default function Header({ t, lang, setLang }) {
  return (
    <>
      <div
        style={{
          background: `linear-gradient(135deg, ${colors.uoRed} 0%, ${colors.uoRedDark} 100%)`,
          padding: "20px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 className="ed-title" style={{ fontSize: "23px", fontWeight: 600, margin: 0, color: "#FFF" }}>
          {t.title}
        </h1>
        <button
          className="ed-linklike"
          onClick={() => setLang(lang === "en" ? "fr" : "en")}
          style={{
            background: colors.gold,
            border: `1px solid ${colors.goldDark}`,
            borderRadius: "20px",
            cursor: "pointer",
            fontSize: "13px",
            color: colors.ink,
            padding: "6px 16px",
            fontWeight: 400,
          }}
        >
          {t.langLink}
        </button>
      </div>

      <div
        style={{
          background: colors.uoRedDark,
          padding: "9px 28px",
          fontSize: "12.5px",
          color: "rgba(255,255,255,0.92)",
        }}
      >
        {t.sourceLine}
      </div>
    </>
  );
}
