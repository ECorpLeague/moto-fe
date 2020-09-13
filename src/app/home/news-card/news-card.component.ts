import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-news-card',
  template: `
    <p class="date">October 21, 2020</p>
    <h1 class="title">Lorem ipsum bla bla bla</h1>
    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus
      nibh, fringilla sit amet feugiat id, mollis a justo. Curabitur vel ex
      eros. Suspendisse consequat nibh a efficitur aliquam. Curabitur eleifend
      metus magna, ac cursus turpis aliquet finibus. Suspendisse potenti. Sed
      pharetra tellus in enim malesuada varius sit amet vitae elit. Vestibulum
      ut porttitor enim. In lacinia vestibulum sapien sed porta. Aenean ante
      dolor, fringilla at auctor vel, ullamcorper at ex. Sed in quam blandit
      purus suscipit condimentum vitae id ex. Mauris pellentesque molestie
      augue. Etiam porta convallis neque, vel tincidunt sem pretium in. Morbi
      sed erat vestibulum ex auctor aliquam eu id erat. Nam in fringilla nunc.
      Aliquam congue consequat ipsum, nec tincidunt metus efficitur non.
    </p>
    <div class="button-container">
      <button mat-button color="accent">
        {{ 'HOME.READ_MORE' | transloco }}
      </button>
    </div>
  `,
  styleUrls: ['./news-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsCardComponent {}
