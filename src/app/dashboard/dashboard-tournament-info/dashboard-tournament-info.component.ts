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
        *ngIf="!!tournamentHandles.length"
        [options]="convertToSelectOptions(tournamentHandles)"
        [initialValue]="tournamentHandles[0]?.id"
        (optionSelected)="test($event)"
      ></app-select>
      <app-spinner *ngIf="!tournamentHandles.length"></app-spinner>
    </div>
    <div class="container">
      <app-title-label [title]="'DASHBOARD.START_DATE' | transloco">
      </app-title-label>
      <div *ngIf="startDate" class="date">{{ startDate }}</div>
      <app-spinner *ngIf="!startDate"></app-spinner>
    </div>
  `,
  styleUrls: ['./dashboard-tournament-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardTournamentInfoComponent {
  @Input() tournamentHandles: TournamentHandle[];
  @Input() startDate: string | undefined;

  convertToSelectOptions(handles: TournamentHandle[]): SelectOption[] {
    return handles.map(handle => ({
      key: handle.id,
      displayValue: handle.name
    }));
  }

  test(value: any) {
    console.log(value);
  }
}
