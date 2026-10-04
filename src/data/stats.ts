export interface GitHubUserStats {
  login: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
  company: string | null;
  location: string | null;
  hireable: boolean | string | null;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface ContributionResponse {
  total: {
    [year: string]: number;
    lastYear: number;
  };
  contributions: ContributionDay[];
}

export const statsConfig = {
  initialViews: 142,
  initialAppreciation: 48,
  sinceDate: "Oct-2026",
  githubUsername: "MrKimeu",
  companyDefault: "Flexi Personnel",
  locationDefault: "Nairobi, Kenya",
  hireableDefault: "Yes",
  fallbackUserStats: {
    login: "MrKimeu",
    name: "Kyalo Isaac Kimeu",
    public_repos: 2,
    followers: 0,
    following: 2,
    company: "Flexi Personnel",
    location: "Nairobi, Kenya",
    hireable: "Yes",
  } satisfies GitHubUserStats,
};
