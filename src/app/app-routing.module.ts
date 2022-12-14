import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemplosPipesComponent } from './components/ejemplos-pipes/ejemplos-pipes.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'pipes', component: EjemplosPipesComponent},
  {
    path: 'form',
    loadChildren: () => import('./components/formularios/formularios.module').then(m => m.FormulariosModule)
  },
  { path: '', pathMatch:'full', redirectTo:'login'},
  { path: '**', pathMatch:'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
