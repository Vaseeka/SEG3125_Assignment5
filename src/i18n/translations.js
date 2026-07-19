/* =========================================================
   Text and Translations
   ========================================================= */

export const T = {
  en: {
    title: "University of Ottawa Enrolment Dashboard",
    langLink: "Français",
    sourceLine: "Enrolment data from Statistics Canada, Table 37-10-0277-03 (link)",

    ledgerHeading: "Universities displayed",
    displaySettings: "Display settings",
    displaySettingsHelp:
      "Use these controls to change what the graphs display — for example, which universities appear or which years are shown.",
    yearLabel: "Year",
    yearAxisLabel: "Year",
    studentsAxisLabel: "Number of students",
    yearRangeLabel: "Year range",
    students: "students",

    barTooltip: (v, name) => `${v} students enrolled at ${name}`,
    lineTooltip: (v, name, y) => `${v} students enrolled in ${name} (${y})`,

    bar: {
      title: (rank, total, y) => `University of Ottawa ranks #${rank} of ${total} in ${y}`,
      desc: "Compares full-time enrolment across the universities checked at right, for the selected year. University of Ottawa is always shown in red.",
    },
    line: {
      title: (pct, y0, y1) =>
        `University of Ottawa enrolment ${pct >= 0 ? "grew" : "fell"} ${Math.abs(pct)}% from ${y0} to ${y1}`,
      desc: "Tracks the University of Ottawa's own full-time enrolment year over year. Hover any point to see the exact number of students.",
    },
  },

  fr: {
    title: "Tableau de bord des effectifs de l'Université d'Ottawa",
    langLink: "English",
    sourceLine: "Données sur les effectifs provenant de Statistique Canada, tableau 37-10-0277-03 (lien)",

    ledgerHeading: "Universités affichées",
    displaySettings: "Paramètres d'affichage",
    displaySettingsHelp:
      "Utilisez ces contrôles pour modifier ce que les graphiques affichent — par exemple, quelles universités apparaissent ou quelles années sont montrées.",
    yearLabel: "Année",
    yearAxisLabel: "Année",
    studentsAxisLabel: "Nombre d'étudiants",
    yearRangeLabel: "Plage d'années",
    students: "étudiants",

    barTooltip: (v, name) => `${v} étudiants inscrits à ${name}`,
    lineTooltip: (v, name, y) => `${v} étudiants inscrits à ${name} (${y})`,

    bar: {
      title: (rank, total, y) => `L'Université d'Ottawa se classe au ${rank}e rang sur ${total} en ${y}`,
      desc: "Compare les effectifs à temps plein entre les universités cochées à droite, pour l'année choisie. L'Université d'Ottawa est toujours affichée en rouge.",
    },
    line: {
      title: (pct, y0, y1) =>
        `Les effectifs de l'UdO ont ${pct >= 0 ? "augmenté de" : "diminué de"} ${Math.abs(pct)}% entre ${y0} et ${y1}`,
      desc: "Suit l'évolution des effectifs à temps plein de l'Université d'Ottawa d'une année à l'autre. Survolez un point pour voir le nombre exact d'étudiants.",
    },
  },
};
