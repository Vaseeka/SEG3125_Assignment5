/* =========================================================
   University Enrollment Data

   Source: https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710027703
   ========================================================= */

export const YEARS = Array.from({ length: 15 }, (_, i) => 2009 + i);

export const UNIVERSITIES = [
  {
    id: "ottawa",
    en: "University of Ottawa",
    fr: "Université d'Ottawa",
    focus: true,
    article: true,
    values: [31287, 32835, 33681, 35163, 35568, 35949, 35958, 36549, 36546, 37317, 37857, 39069, 40776, 41352, 41883],
  },
  {
    id: "toronto",
    en: "University of Toronto",
    fr: "Université de Toronto",
    article: true,
    values: [68583, 69837, 71586, 73635, 75891, 77505, 79785, 81096, 82002, 83556, 85314, 87057, 88746, 89685, 91878],
  },
  {
    id: "mcmaster",
    en: "McMaster University",
    fr: "Université McMaster",
    article: false,
    values: [24462, 24711, 25293, 25827, 26157, 26514, 28431, 29859, 30540, 31902, 33204, 34773, 35646, 36045, 36180],
  },
  {
    id: "waterloo",
    en: "University of Waterloo",
    fr: "Université de Waterloo",
    article: true,
    values: [28368, 29940, 31065, 32181, 33063, 33519, 33957, 35115, 36276, 37086, 37941, 38940, 39465, 39042, 39015],
  },
  {
    id: "queens",
    en: "Queen's University",
    fr: "Université Queen's",
    article: false,
    values: [18744, 19314, 21048, 21639, 22182, 23271, 23967, 24417, 24534, 25536, 26055, 26595, 28437, 28968, 29550],
  },
  {
    id: "carleton",
    en: "Carleton University",
    fr: "Université Carleton",
    article: false,
    values: [20238, 20940, 21855, 22437, 23118, 23559, 23961, 24462, 25296, 25242, 25446, 25074, 24435, 23727, 23973],
  },
];

export const OTTAWA = UNIVERSITIES.find((u) => u.focus);
export const OTHERS = UNIVERSITIES.filter((u) => !u.focus);
