import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { YEARS, OTTAWA } from "../data/universities";
import { colors } from "../theme/colors";
import { numFmt, niceAxis } from "../utils/niceAxis";
import HelpIcon from "./HelpIcon";
import TooltipBox from "./TooltipBox";

export default function LineChartCard({ lang, t, lineRange, setLineRange, sentenceName }) {
  const nf = numFmt(lang);

  const lineData = useMemo(() => {
    const [y0, y1] = lineRange;
    const yrs = YEARS.filter((y) => y >= y0 && y <= y1);
    const rows = yrs.map((y) => ({ year: y, value: OTTAWA.values[YEARS.indexOf(y)] }));
    const pct =
      Math.round(
        ((OTTAWA.values[YEARS.indexOf(y1)] - OTTAWA.values[YEARS.indexOf(y0)]) / OTTAWA.values[YEARS.indexOf(y0)]) *
          1000
      ) / 10;
    const values = rows.map((r) => r.value);
    const axis = niceAxis(Math.min(...values), Math.max(...values), 5);
    return { rows, pct, axis };
  }, [lineRange]);

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
          {t.line.title(lineData.pct, lineRange[0], lineRange[1])}
        </div>
        {t.line.desc && (
          <div style={{ fontSize: "12.5px", color: colors.textMuted, marginTop: "4px" }}>{t.line.desc}</div>
        )}
      </div>

      <div className="ed-panel" style={{ display: "grid", gridTemplateColumns: "1fr 220px" }}>
        <div style={{ padding: "18px" }}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData.rows} margin={{ left: 22, right: 20, top: 14, bottom: 18 }}>
              <CartesianGrid stroke="#DDD2B4" vertical={false} />
              <XAxis
                dataKey="year"
                tick={{ fontSize: 11, fill: colors.ink }}
                stroke={colors.cardBorder}
                axisLine={false}
                tickLine={false}
                padding={{ left: 18, right: 18 }}
                label={{ value: t.yearAxisLabel, position: "insideBottom", offset: -12, fontSize: 11.5, fill: colors.textMuted }}
              />
              <YAxis
                domain={[lineData.axis.min, lineData.axis.max]}
                ticks={lineData.axis.ticks}
                tickFormatter={(v) => nf.format(v)}
                tick={{ fontSize: 11, fill: colors.ink }}
                stroke={colors.cardBorder}
                axisLine={false}
                tickLine={false}
                width={56}
                label={{
                  value: t.studentsAxisLabel,
                  angle: -90,
                  position: "insideLeft",
                  offset: -12,
                  fontSize: 11.5,
                  fill: colors.textMuted,
                  style: { textAnchor: "middle" },
                }}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload || !payload.length) return null;
                  const row = payload[0].payload;
                  return <TooltipBox>{t.lineTooltip(nf.format(row.value), sentenceName(OTTAWA), row.year)}</TooltipBox>;
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={colors.chartRed}
                strokeWidth={3}
                dot={{ r: 3, fill: colors.chartRed }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
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
            <HelpIcon text={t.lineDisplaySettingsHelp} />
          </div>

          <div
            style={{
              fontSize: "11.5px",
              fontWeight: 700,
              marginBottom: "10px",
              color: colors.textMuted,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            {t.yearRangeLabel}
          </div>

          <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "12.5px" }}>
            <select
              value={lineRange[0]}
              onChange={(e) => {
                const newStart = Number(e.target.value);
                setLineRange([newStart, Math.max(lineRange[1], newStart + 1)]);
              }}
              style={{ flex: 1, padding: "7px", border: `1px solid ${colors.cardBorder}`, borderRadius: "6px", background: "#FFF" }}
            >
              {YEARS.filter((y) => y <= lineRange[1] - 1).map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
            <span style={{ color: colors.textFaint }}>–</span>
            <select
              value={lineRange[1]}
              onChange={(e) => {
                const newEnd = Number(e.target.value);
                setLineRange([Math.min(lineRange[0], newEnd - 1), newEnd]);
              }}
              style={{ flex: 1, padding: "7px", border: `1px solid ${colors.cardBorder}`, borderRadius: "6px", background: "#FFF" }}
            >
              {YEARS.filter((y) => y >= lineRange[0] + 1).map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}