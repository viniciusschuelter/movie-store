import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ListComponent } from "./list.component";
import { ListModule } from "./list.module";

const routes: Route[] = [
  {
    path: '',
    component: ListComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ListModule
  ]
})
export class ListRoutingModule { }
