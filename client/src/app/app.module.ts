import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './modules/shared/shared.module';
import { UserModule } from './modules/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
