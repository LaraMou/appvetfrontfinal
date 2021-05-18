import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTareaComponent } from './components/add-tarea/add-tarea.component';
import { CrearExpertoComponent } from './components/crear-experto/crear-experto.component';
import { EtiquetasPageComponent } from './modules/etiquetas/etiquetas-page/etiquetas-page.component';
import { ExpertosPageComponent } from './modules/expertos/expertos-page/expertos-page.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';

const routes: Routes = [
  {
    path: '', // http:localhost:4200/
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login', // http:localhost:4200/login
    component: LoginPageComponent
  },
  {
    path: 'expertos', // http:localhost:4200/login
    component: ExpertosPageComponent
  },
  {
    path: 'expertos/form', // http:localhost:4200/login
    component: CrearExpertoComponent
  },
  {
    path: 'etiquetas', // http:localhost:4200/login
    component: EtiquetasPageComponent
  },
  {
    path: 'etiquetas/form', // http:localhost:4200/login
    component: AddTareaComponent
  },
  {
    path: 'etiquetas/form/:id', // http:localhost:4200/login
    component: AddTareaComponent
  },


  {
    path: '**',
    component: ExpertosPageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }