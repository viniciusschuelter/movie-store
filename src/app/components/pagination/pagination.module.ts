import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from "./pagination.component";
import {SpliceModule} from "../../pipes/split/splice.module";



@NgModule({
  declarations: [
    PaginationComponent
  ],
  exports: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    SpliceModule
  ]
})
export class PaginationModule { }
