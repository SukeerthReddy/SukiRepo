import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RegisterCompomnent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  {
    path: 'register'
  },
  {
    path: 'login'
  }
];
@NgModule({
  declarations: [AppComponent, RegisterCompomnent, LoginComponent],
  imports: [BrowserModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule {}
