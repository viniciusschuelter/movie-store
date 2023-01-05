import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from "./list.component";
import {FormsModule} from "@angular/forms";
import {PaginationComponent} from "../../components/pagination/pagination.component";



@NgModule({
  declarations: [
    ListComponent
  ],
    imports: [
        CommonModule,
        PaginationComponent,
        FormsModule
    ]
})
export class ListModule { }
