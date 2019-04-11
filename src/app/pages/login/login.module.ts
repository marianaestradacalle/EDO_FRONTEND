import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { LoginPage } from './login.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { EncargadoService } from 'src/app/services/encargado.service';


const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [LoginPage],
  providers: [
    HttpClient
  ]
})
export class LoginPageModule {}
