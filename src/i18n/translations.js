/* =========================================================
   Text and Translations
   ========================================================= */

export const SOURCE_URL =
  "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710027703";

export const T = {
  en: {
    title: "University of Ottawa Full-time Student Enrolment Dashboard",
    langLink: "Français",
    sourceText: "Enrolment data gathered by Statistics Canada",
    sourceLinkLabel: "(access the dataset here)",

    ledgerHeading: "Universities",
    displaySettings: "Display settings",
    barDisplaySettingsHelp:
      "Choose which universities' enrolment data the bar chart displays, and for which year. The University of Ottawa's enrolment data is always shown.",
    lineDisplaySettingsHelp:
      "Choose which range of years of University of Ottawa enrolment data the line chart displays.",
    yearLabel: "Year",
    yearAxisLabel: "Year",
    studentsAxisLabel: "Number of full-time students",
    yearRangeLabel: "Year range",
    students: "students",

    barTooltip: (v, name) => `${v} full-time students were enrolled at ${name}`,
    lineTooltip: (v, name, y) => `${v} full-time students were enrolled at ${name} in ${y}`,

    bar: {
      title: (value, y) => `${value} full-time students were enrolled at the University of Ottawa in ${y}`,
    },
    line: {
      title: (pct, y0, y1) =>
        `Number of full-time students enrolled at the University of Ottawa ${pct >= 0 ? "increased" : "decreased"} by ${Math.abs(pct)}% from ${y0} to ${y1}`,
    },
  },

  fr: {
    title: "Tableau de bord sur les inscriptions des étudiants à temps plein de l'Université d'Ottawa",
    langLink: "English",
    sourceText: "Données sur les inscriptions recueillies par Statistique Canada",
    sourceLinkLabel: "(accédez à l'ensemble de données ici)",

    ledgerHeading: "Universités",
    displaySettings: "Paramètres d'affichage",
    barDisplaySettingsHelp:
      "Choisissez quelles universités apparaissent dans le graphique à barres et pour quelle année. Les données d'inscription de l'Université d'Ottawa sont toujours affichées.",
    lineDisplaySettingsHelp:
      "Choisissez la période couverte par les données d'inscription de l'Université d'Ottawa que le graphique linéaire doit afficher.",
    yearLabel: "Année",
    yearAxisLabel: "Année",
    studentsAxisLabel: "Nombre d'étudiants à temps plein",
    yearRangeLabel: "Période",
    students: "étudiants",

    barTooltip: (v, name) => `${v} étudiants à temps plein étaient inscrits à ${name}`,
    lineTooltip: (v, name, y) => `${v} étudiants à temps plein étaient inscrits à ${name} en ${y}`,

    bar: {
      title: (value, y) => `${value} étudiants à temps plein étaient inscrits à l'Université d'Ottawa en ${y}`,
    },
    line: {
      title: (pct, y0, y1) =>
        `Le nombre d'étudiants à temps plein inscrits à l'Université d'Ottawa a ${pct >= 0 ? "augmenté" : "diminué"} de ${Math.abs(pct)} % entre ${y0} et ${y1}`,
    },
  },
};