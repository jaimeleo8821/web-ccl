import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importar los módulos HTTP y Formularios
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Importar el router
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ListenUsComponent } from './components/listen-us/listen-us.component';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { SocialComponent } from './components/social/social.component';
import { HelpComponent } from './components/help/help.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { DonateComponent } from './components/donate/donate.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { EditTimeTableComponent } from './components/edit-time-table/edit-time-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ListenUsComponent,
    TimeTableComponent,
    SocialComponent,
    HelpComponent,
    RegisterComponent,
    UserComponent,
    DonateComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent,
    EditTimeTableComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
