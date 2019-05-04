import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Opcion } from 'src/app/interfaces/interfaces';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-pprincipal',
  templateUrl: './pprincipal.page.html',
  styleUrls: ['./pprincipal.page.scss'],
})
export class PprincipalPage implements OnInit {

   pacientes = [];

  constructor(private menuCtrl: MenuController, public pacienteService: PacienteService) {
    this.pacienteService.getAP().subscribe( (res: any) => {
      this.pacientes = res;
      console.log(this.pacientes);
    });
  }



  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}

