import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [RouterModule],
  template: `
    <div class="border-end bg-white" id="sidebar-wrapper">
      <div class="sidebar-heading border-bottom bg-secondary bg-gradient text-white">Movie Store</div>
      <div class="list-group list-group-flush">
        <a class="list-group-item list-group-item-action list-group-item-light p-3" routerLink="/dashboard">
          Dashboard
        </a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" routerLink="/list">
           List
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent { }
