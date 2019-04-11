import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Opcion } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-pprincipal',
  templateUrl: './pprincipal.page.html',
  styleUrls: ['./pprincipal.page.scss'],
})
export class PprincipalPage implements OnInit {

  opciones: Opcion[] = [];

  constructor( private menuCtrl: MenuController) { }



  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}

