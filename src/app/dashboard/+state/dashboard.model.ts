import { NgttRound } from 'ng-tournament-tree';

export enum BestOf {
  one = 1,
  three = 3,
  five = 5
}

export interface BracketMatch {
  id: string;
  firstTeam: BracketTeam;
  secondTeam: BracketTeam;
  bo: BestOf;
}

export interface BracketTeam {
  id: string;
  name: string;
  score?: number;
}

export interface Tournament {
  id: string;
  name: string;
  startDate: string;
  rounds: NgttRound[];
}
