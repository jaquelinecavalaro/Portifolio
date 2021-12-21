import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';

const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch: 'full'},

  {path:'entrar', component: EntrarComponent},
/* ASSIM PASSA PARAMETRO DE ROTA NO ANGULAR */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
