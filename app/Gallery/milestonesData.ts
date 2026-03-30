export type MilestoneEntry = {
  year: number;
  title: string;
  summary: string;
};

const START_YEAR = 1996;

const IMPORTANT_MILESTONES: Record<number, Omit<MilestoneEntry, "year">> = {
  1996: {
    title: "Born in Xiamen, Fujian",
    summary: "Born in 1996 on Xiamen Island, Fujian, in southeastern China. This marks the first milestone of the life timeline.",
  },
  1999: {
    title: "Attended Haiyan Kindergarten in Xiamen",
    summary: "In 1999, attended Haiyan Kindergarten in Xiamen.",
  },
  2002: {
    title: "Started Primary School",
    summary: "In 2002, began studying at Minli Primary School in Xiamen, Fujian.",
  },
  2008: {
    title: "Started Middle School",
    summary: "In 2008, started middle school at Huaqiao Middle School in Xiamen, Fujian.",
  },
  2011: {
    title: "Started High School",
    summary: "In 2011, started high school at Xiamen No. 1 High School in Xiamen, Fujian.",
  },
  2014: {
    title: "Started University",
    summary: "In 2014, started university at Tsinghua University in Beijing.",
  },
  2015: {
    title: "First Trip Abroad",
    summary: "In 2015, traveled abroad for the first time to attend a summer school program at the University of Exeter in the UK.",
  },
  2016: {
    title: "Joined SOE Softball Team",
    summary: "In 2016, joined the SOE softball team.",
  },
  2017: {
    title: "Became SOE Softball Captain and Joined THU Team",
    summary: "In 2017, joined the THU softball team and became captain of the SOE softball team.",
  },
  2018: {
    title: "Started Master's Program at Tsinghua",
    summary: "In 2018, completed undergraduate thesis work at Penn State University in the USA, received a Bachelor of Engineering degree from Tsinghua University, started a master's program at Tsinghua, joined the RISE association, and conducted the Shanxi sand filtration project.",
  },
  2019: {
    title: "Joined Keru as Content Expert",
    summary: "In 2019, joined Keru as a content expert and conducted a water safety program in Cambodia.",
  },
  2021: {
    title: "Started Category Manager Role at Fenchem",
    summary: "In 2021, started working as a category manager at Fenchem in Nanjing.",
  },
  2022: {
    title: "Business Trips to the USA",
    summary: "In 2022, traveled to the USA for business trips while working at Fenchem.",
  },
  2023: {
    title: "Started Master's Study at EPFL",
    summary: "In 2023, started a master's program at EPFL in Switzerland, volunteered as a photography assistant at a surf shop in Hainan, and learned surfing.",
  },
  2024: {
    title: "Obtained Swiss Driving License",
    summary: "In 2024, obtained a Swiss driving license.",
  },
  2025: {
    title: "Internship at Logitech in Switzerland",
    summary: "In 2025, completed an internship at Logitech in Switzerland, and learned sailing and windsurfing at the UNIL Sport Center.",
  },
  2026: {
    title: "Started Internship at UNEP in Paris",
    summary: "In 2026, started an internship at UNEP in Paris, France.",
  },
};

export function getMilestoneYears(): number[] {
  const currentYear = new Date().getFullYear();
  const years: number[] = [];

  for (let year = START_YEAR; year <= currentYear; year += 1) {
    years.push(year);
  }

  return years;
}

export function getMilestoneTimeline(): MilestoneEntry[] {
  return getMilestoneYears().map((year) => {
    const milestone = IMPORTANT_MILESTONES[year];

    if (milestone) {
      return {
        year,
        ...milestone,
      };
    }

    return {
      year,
      title: "Milestone Archive",
      summary: "",
    };
  });
}
