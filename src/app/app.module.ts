import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NavbarModule} from "./components/navbar/navbar.module";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {SidebarModule} from "./components/sidebar/sidebar.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NavbarModule,
    AppRoutingModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
