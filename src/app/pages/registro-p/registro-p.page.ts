import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { EncargadoService } from 'src/app/services/encargado.service';
import { AlertsService } from 'src/app/services/alerts.service';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-registro-p',
  templateUrl: './registro-p.page.html',
  styleUrls: ['./registro-p.page.scss'],
})
export class RegistroPPage implements OnInit {

  forma: FormGroup;

  constructor(
    private router: Router,
    private pacienteService: PacienteService,
    private alertService: AlertsService) {

    this.forma = new FormGroup({
      cc:  new FormControl(''),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      genero: new FormControl(''),
      fechaNacimiento: new FormControl('')
    });
    console.log(this.forma);
  }

  ngOnInit() {
  }

  registrarP(form: NgModel) {
    this.pacienteService.registroP(form.value).subscribe (value => {
      this.pacienteService.Paciente = value;
      this.router.navigate(['inicio']);
      console.log(value);
    });
    console.log(form);
  }

}
