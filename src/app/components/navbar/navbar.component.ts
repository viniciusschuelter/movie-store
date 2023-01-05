import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient border-bottom">
      <div class="container-fluid">
        <div class="sidebar-heading d-block d-lg-none">Movie Store</div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
            <li class="nav-item  d-block d-lg-none">
              <a class="list-group-item list-group-item-action list-group-item-light p-3" routerLink="/dashboard">
                Dashboard
              </a>
            </li>
            <li class="nav-item  d-block d-lg-none">
              <a class="list-group-item list-group-item-action list-group-item-light p-3" routerLink="/list">
                List
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" id="navbarDropdown" href="#" role="button"
                 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#!">Action</a>
                <a class="dropdown-item" href="#!">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#!">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    :host {
      .sidebar-heading {
        padding: 0.875rem 1.25rem;
        font-size: 1.2rem;
      }
    }
  `]
})
export class NavbarComponent  { }
