import { useState } from "react";
import { T } from "./i18n/translations";
import { colors } from "./theme/colors";
import Header from "./components/Header";
import BarChartCard from "./components/BarChartCard";
import LineChartCard from "./components/LineChartCard";

export default function App() {
  const [lang, setLang] = useState("en");
  const [barCompare, setBarCompare] = useState(["toronto", "carleton", "queens"]);
  const [barYear, setBarYear] = useState(2023);
  const [lineRange, setLineRange] = useState([2009, 2023]);

  const t = T[lang];
  const uName = (u) => (lang === "fr" ? u.fr : u.en);
  const sentenceName = (u) => {
    if (lang === "fr") return `l'${uName(u)}`;
    return u.article ? `the ${uName(u)}` : uName(u);
  };

  return (
    <div
      style={{
        fontFamily: "'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: colors.pageBg,
        color: colors.ink,
        minHeight: "100vh",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      }}
    >
      <style>{`
        .ed-title { font-family: 'Spectral', Georgia, serif; }
        .ed-checkrow:hover { background: #F0EADA; }
        .ed-linklike:focus-visible, .ed-check-btn:focus-visible, .ed-range:focus-visible {
          outline: 2px solid ${colors.uoRed}; outline-offset: 2px;
        }
        .ed-linklike { transition: background 0.15s; }
        .ed-linklike:hover { background: ${colors.goldDark} !important; }
        .ed-range {
          -webkit-appearance: none; appearance: none; height: 4px;
          border-radius: 4px; background: #E4DAC2; outline: none;
        }
        .ed-range::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 16px; height: 16px; border-radius: 50%;
          background: ${colors.checkBrown}; cursor: pointer; border: 2px solid white;
          box-shadow: 0 0 0 1px ${colors.checkBrown};
        }
        .ed-range::-moz-range-thumb {
          width: 14px; height: 14px; border-radius: 50%;
          background: ${colors.checkBrown}; cursor: pointer; border: 2px solid white;
        }
        select { font-family: 'Work Sans', sans-serif; }
        @media (max-width: 820px) {
          .ed-panel { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Header t={t} lang={lang} setLang={setLang} />

      <div style={{ padding: "36px 28px 28px", display: "flex", flexDirection: "column", gap: "22px" }}>
        <BarChartCard
          lang={lang}
          t={t}
          barCompare={barCompare}
          setBarCompare={setBarCompare}
          barYear={barYear}
          setBarYear={setBarYear}
          uName={uName}
          sentenceName={sentenceName}
        />

        <LineChartCard
          lang={lang}
          t={t}
          lineRange={lineRange}
          setLineRange={setLineRange}
          sentenceName={sentenceName}
        />
      </div>
    </div>
  );
}
