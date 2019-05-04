import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacientePage implements OnInit {

  pacientes = [];

  constructor(public pacienteService: PacienteService) {
    this.pacienteService.getAP().subscribe( (res: any) => {
      this.pacientes = res;
      console.log(this.pacientes);
    });
  }

  ngOnInit() {
  }

}


