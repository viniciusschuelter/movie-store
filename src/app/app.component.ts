import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="root-container">
      <app-sidebar></app-sidebar>

      <div class="content">
        <app-navbar></app-navbar>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    :host {
      .root-container {
        display: flex;
        overflow-x: hidden;
        .content {
          min-width: 100vw;
        }
        @media (min-width: 768px) {
          .content {
            min-width: 0;
            width: 100%;
          }
        }
      }
    }
  `]
})
export class AppComponent {
  title = 'movie-store';
}
