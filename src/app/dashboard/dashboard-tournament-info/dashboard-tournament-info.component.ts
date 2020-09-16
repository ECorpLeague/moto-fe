import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TournamentHandle } from '../+state/dashboard.model';
import { SelectOption } from '../../shared/select/select/select.component';

@Component({
  selector: 'app-dashboard-tournament-info',
  template: `
    <div class="container">
      <app-title-label
        [title]="'DASHBOARD.TOURNAMENT' | transloco"
      ></app-title-label>
      <app-select
        [options]="convertToSelectOptions(tournamentHandles)"
      ></app-select>
    </div>
    <div class="container">
      <app-title-label [title]="'DASHBOARD.START_DATE' | transloco">
      </app-title-label>
      <div class="date">{{ startDate }}</div>
    </div>
  `,
  styleUrls: ['./dashboard-tournament-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardTournamentInfoComponent {
  @Input() tournamentHandles: TournamentHandle[];
  @Input() startDate: string;

  convertToSelectOptions(handles: TournamentHandle[]): SelectOption[] {
    return handles.map(handle => ({
      key: handle.id,
      displayValue: handle.name
    }));
  }
}
