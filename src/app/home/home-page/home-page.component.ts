import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <p>
      home-page works!
    </p>
  `,
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
