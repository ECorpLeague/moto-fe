export enum BestOf {
  one = 1,
  three = 3,
  five = 5
}

export interface BracketMatch {
  firstTeam: BracketTeam;
  secondTeam: BracketTeam;
  bo: BestOf;
}

export interface BracketTeam {
  name: string;
  score?: number;
}
