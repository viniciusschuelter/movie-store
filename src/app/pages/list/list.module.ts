import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from "./list.component";
import {PaginationModule} from "../../components/pagination/pagination.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListComponent
  ],
    imports: [
        CommonModule,
        PaginationModule,
        FormsModule
    ]
})
export class ListModule { }
