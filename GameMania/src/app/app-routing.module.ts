import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DepartamentosComponent } from './pages/departamentos/departamentos.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'departamentos',component:DepartamentosComponent},
  {path:'sobre',component:SobreComponent},
  {path:'cadastro',component:CadastroComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
