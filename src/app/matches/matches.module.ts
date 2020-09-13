import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesColumnComponent } from './matches-column/matches-column.component';
import { LiveMatchesComponent } from './live-matches/live-matches.component';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';
import { ResultsMatchesComponent } from './results-matches/results-matches.component';
import { LabelModule } from '../shared/label/label.module';
import { UpcomingMatchComponent } from './upcoming-match/upcoming-match.component';
import { ResultMatchComponent } from './result-match/result-match.component';
import { TeamBlockModule } from '../shared/team-block/team-block.module';
import { TranslateModule } from '../settings/translate.module';

@NgModule({
  declarations: [
    MatchesColumnComponent,
    LiveMatchesComponent,
    UpcomingMatchesComponent,
    ResultsMatchesComponent,
    UpcomingMatchComponent,
    ResultMatchComponent
  ],
  imports: [CommonModule, LabelModule, TeamBlockModule, TranslateModule],
  exports: [MatchesColumnComponent]
})
export class MatchesModule {}
