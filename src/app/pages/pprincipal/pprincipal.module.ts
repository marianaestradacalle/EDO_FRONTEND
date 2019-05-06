import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PprincipalPage } from './pprincipal.page';
import { ComponentsModule } from 'src/app/components/components.module';


const routes: Routes = [
  {
    path: '', component: PprincipalPage, children: [

      { path: 'paciente', loadChildren: './pages/paciente/paciente.module#PacientePageModule' },
      { path: 'registro-p', loadChildren: './pages/registro-p/registro-p.module#RegistroPPageModule' },
      { path: 'nosotros', loadChildren: './pages/nosotros/nosotros.module#NosotrosPageModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,

  ],
  declarations: [PprincipalPage]
})
export class PprincipalPageModule {}
