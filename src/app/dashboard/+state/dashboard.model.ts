export interface BracketMatch {
  firstTeam: BracketTeam;
  secondTeam: BracketTeam;
}

export interface BracketTeam {
  name: string;
  score: number;
}
