import { BracketTeam, BracketMatch } from './dashboard.model';

export function isLoser(team: BracketTeam, match: BracketMatch): boolean {
  return team.score ? match.bo / 2 > team.score : false;
}
