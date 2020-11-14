'use strict'
/* Importar los componentes para el Routing */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Importar los componentes */
import { AboutComponent } from './components/about/about.component';
import { DonateComponent } from './components/donate/donate.component';
import { HelpComponent } from './components/help/help.component';
import { ListenUsComponent } from './components/listen-us/listen-us.component';
import { RegisterComponent } from './components/register/register.component';
import { SocialComponent } from './components/social/social.component';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { UserComponent } from './components/user/user.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { EditTimeTableComponent } from './components/edit-time-table/edit-time-table.component';

/* Definición de las rutas */
const appRoutes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'quienes-somos', component: AboutComponent},
    {path: 'donar', component: DonateComponent},
    {path: 'ayuda', component: HelpComponent},
    {path: 'escuchanos', component: ListenUsComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'nuestras-redes', component: SocialComponent},
    {path: 'horarios', component: TimeTableComponent},
    {path: 'usuario', component: UserComponent},
    {path: 'lider/:id', component: DetailComponent},
    {path: 'editar/:id', component: EditComponent},
    {path: 'editar-horario/:id', component: EditTimeTableComponent},
    {path: '**', component: ErrorComponent},
];

/* Exportar la configuración de las rutas */

//Exportar el servico de rutas que es un array de tipo 'any'
export const appRoutingProviders: any[] = [];

/*  Exportar el routing que es el módulo 'ModuleWithProviders que llama al método
    'forRoot' de 'RouterModule' que carga la configuración de rutas en el router de Angular 'appRoutes' */
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });
