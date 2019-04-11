import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistroPPage } from './registro-p.page';
import { ComponentsModule } from 'src/app/components/components.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: RegistroPPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    HttpClientModule
  ],
  declarations: [RegistroPPage],
  providers: [
    HttpClient
  ]
})
export class RegistroPPageModule {}
