import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from "./list.component";
import {PaginationModule} from "../../components/pagination/pagination.module";



@NgModule({
  declarations: [
    ListComponent
  ],
    imports: [
        CommonModule,
        PaginationModule
    ]
})
export class ListModule { }
