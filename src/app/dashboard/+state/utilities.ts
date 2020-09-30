import { BracketTeam, BracketMatch, BestOf } from './dashboard.model';

export function isFinishedMatch(match: BracketMatch): boolean {
  const firstScore = match.firstTeam.score;
  const secondScore = match.secondTeam.score;

  return firstScore && secondScore
    ? match.firstTeam.score! + match.secondTeam.score! >
        boToNumber(match.bo) / 2
    : false;
}

export function isLoser(team: BracketTeam, match: BracketMatch): boolean {
  return team.score ? boToNumber(match.bo) / 2 > team.score : false;
}

function boToNumber(bo: BestOf): number {
  switch (bo) {
    case BestOf.one: {
      return 1;
    }
    case BestOf.three: {
      return 3;
    }
    case BestOf.five: {
      return 5;
    }
  }
}
