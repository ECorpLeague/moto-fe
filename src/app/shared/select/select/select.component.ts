import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
/*
change to @ngneat/reactive-forms when they fix strict mode
https://github.com/ngneat/reactive-forms/issues/26
*/
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface SelectOption {
  key: number;
  displayValue: string;
}

@Component({
  selector: 'app-select',
  template: `
    <select
      *ngIf="!!options.length"
      [formControl]="control"
      [compareWith]="compareByKey"
    >
      <option *ngFor="let option of options" [ngValue]="option.key">{{
        option.displayValue
      }}</option>
    </select>
  `,
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit, OnDestroy {
  @Input() options: SelectOption[];

  @Input()
  public set initialValue(value: number | undefined) {
    if (!!value) {
      this.control.patchValue(value);
    }
  }

  @Output() optionSelected = new EventEmitter<number>();

  control = new FormControl(null);
  private destroy$ = new Subject();

  ngOnInit(): void {
    this.control.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.optionSelected.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  compareByKey(key1: number, key2: number): boolean {
    return key1 === key2;
  }
}
