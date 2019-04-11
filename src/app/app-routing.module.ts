import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from './guards/autenticacion.guard';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'registro-e', loadChildren: './pages/registro-e/registro-e.module#RegistroEPageModule' },
  { path: 'nosotros', loadChildren: './pages/nosotros/nosotros.module#NosotrosPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'pprincipal', loadChildren: './pages/pprincipal/pprincipal.module#PprincipalPageModule'},
  { path: 'paciente', loadChildren: './pages/paciente/paciente.module#PacientePageModule' },
  { path: 'registro-p', loadChildren: './pages/registro-p/registro-p.module#RegistroPPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// canActivate: [AutenticacionGuard]
