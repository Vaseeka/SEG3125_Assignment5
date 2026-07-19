import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import { YEARS, OTTAWA, OTHERS, UNIVERSITIES } from "../data/universities";
import { colors } from "../theme/colors";
import { numFmt } from "../utils/niceAxis";
import Checkmark from "./Checkmark";
import HelpIcon from "./HelpIcon";
import TooltipBox from "./TooltipBox";

export default function BarChartCard({
  lang,
  t,
  barCompare,
  setBarCompare,
  barYear,
  setBarYear,
  uName,
  sentenceName,
}) {
  const nf = numFmt(lang);

  function toggle(id) {
    setBarCompare(barCompare.includes(id) ? barCompare.filter((x) => x !== id) : [...barCompare, id]);
  }

  const barData = useMemo(() => {
    const yi = YEARS.indexOf(barYear);
    const rows = [OTTAWA, ...OTHERS.filter((u) => barCompare.includes(u.id))]
      .map((u) => ({ id: u.id, name: uName(u), value: u.values[yi], isOttawa: u.focus }))
      .sort((a, b) => b.value - a.value);
    const rank = rows.findIndex((r) => r.isOttawa) + 1;
    return { rows, rank, total: rows.length };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barCompare, barYear, lang]);

  return (
    <div
      style={{
        background: colors.cardBg,
        border: `1px solid ${colors.cardBorder}`,
        borderRadius: "10px",
        boxShadow: "0 1px 2px rgba(43,38,32,0.05)",
      }}
    >
      <div style={{ padding: "16px 20px", borderBottom: `1px solid ${colors.cardBorder}` }}>
        <div className="ed-title" style={{ fontSize: "18.5px", fontWeight: 600, color: colors.chartRed }}>
          {t.bar.title(barData.rank, barData.total, barYear)}
        </div>
        <div style={{ fontSize: "12.5px", color: colors.textMuted, marginTop: "4px" }}>{t.bar.desc}</div>
      </div>

      <div className="ed-panel" style={{ display: "grid", gridTemplateColumns: "1fr 220px" }}>
        <div style={{ padding: "18px" }}>
          <ResponsiveContainer width="100%" height={Math.max(220, barData.rows.length * 60)}>
            <BarChart data={barData.rows} layout="vertical" margin={{ left: 4, right: 56 }} barCategoryGap="20%">
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="name"
                width={185}
                tick={{ fontSize: 12.5, fill: colors.ink }}
                tickMargin={12}
                stroke={colors.axisFade}
                axisLine={{ stroke: colors.axisFade, strokeWidth: 1 }}
                tickLine={false}
              />
              <Tooltip
                cursor={false}
                content={({ active, payload }) => {
                  if (!active || !payload || !payload.length) return null;
                  const row = payload[0].payload;
                  const u = UNIVERSITIES.find((x) => x.id === row.id);
                  return <TooltipBox>{t.barTooltip(nf.format(row.value), sentenceName(u))}</TooltipBox>;
                }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} maxBarSize={54} activeBar={{ fillOpacity: 0.72 }}>
                {barData.rows.map((d) => (
                  <Cell key={d.id} fill={d.isOttawa ? colors.barRed : colors.gray} />
                ))}
                <LabelList
                  dataKey="value"
                  position="right"
                  formatter={(v) => nf.format(v)}
                  style={{ fontSize: "12px", fill: colors.ink, fontWeight: 600, fontFamily: "'Work Sans', sans-serif" }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ borderLeft: `1px solid ${colors.cardBorder}`, padding: "18px" }}>
          <div
            style={{
              fontSize: "10.5px",
              fontWeight: 700,
              marginBottom: "20px",
              color: colors.textFainter,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              display: "flex",
              alignItems: "center",
            }}
          >
            {t.displaySettings}
            <HelpIcon text={t.displaySettingsHelp} />
          </div>

          <div
            style={{
              fontSize: "11.5px",
              fontWeight: 700,
              marginBottom: "8px",
              color: colors.textMuted,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            {t.ledgerHeading}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", padding: "6px 4px", opacity: 0.7 }}>
            <Checkmark checked={true} color={colors.lockedBrown} />
            <span>{uName(OTTAWA)}</span>
          </div>

          {OTHERS.map((u) => (
            <button
              key={u.id}
              className="ed-checkrow ed-check-btn"
              onClick={() => toggle(u.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px 4px",
                fontSize: "13px",
                color: colors.ink,
                fontFamily: "inherit",
                borderRadius: "5px",
              }}
            >
              <Checkmark checked={barCompare.includes(u.id)} />
              <span>{uName(u)}</span>
            </button>
          ))}

          <div style={{ marginTop: "18px" }}>
            <div
              style={{
                fontSize: "11.5px",
                fontWeight: 700,
                marginBottom: "8px",
                color: colors.textMuted,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              {t.yearLabel}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2px" }}>
              <span style={{ fontSize: "11px", color: colors.textFaint }}>{YEARS[0]}</span>
              <span style={{ fontSize: "15px", fontWeight: 700, color: colors.checkBrown }}>{barYear}</span>
              <span style={{ fontSize: "11px", color: colors.textFaint }}>{YEARS[YEARS.length - 1]}</span>
            </div>
            <input
              type="range"
              className="ed-range"
              min={YEARS[0]}
              max={YEARS[YEARS.length - 1]}
              step={1}
              value={barYear}
              onChange={(e) => setBarYear(Number(e.target.value))}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
