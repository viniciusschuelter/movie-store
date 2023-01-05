import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SpliceModule} from "../../pipes/split/splice.module";

@Component({
  standalone: true,
  selector: 'app-pagination',
  imports: [CommonModule, SpliceModule],
  template: `
    <nav>
      <ul class="pagination justify-content-center">
        <li class="page-item" [ngClass]="{'disabled': !this.currPage}">
          <a class="page-link" (click)="goToPage(this.currPage - 1)">
            Previous
          </a>
        </li>
        <li *ngFor="let page of arrayPages | splice: currPage: 5" class="page-item"
            [ngClass]="{'active': this.currPage === page}">
          <a class="page-link" (click)="goToPage(page)">{{page + 1}}</a>
        </li>
        <li class="page-item" [ngClass]="{'disabled': this.currPage === (this.totalPages - 1)}">
          <a class="page-link" (click)="goToPage(this.currPage + 1)">Next</a>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    :host {
      .page-item {
        cursor: pointer;
      }
    }
  `]
})
export class PaginationComponent implements OnChanges {

  @Input() currPage = 0;
  @Input() totalPages = 0;
  @Output() currPageChange = new EventEmitter<number>();
  arrayPages: number[] = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.arrayPages = [...Array(this.totalPages).keys()];
    }
  }

  goToPage(page: number): void {
    this.currPage = page;
    this.currPageChange.emit(this.currPage);
  }
}
