import {Component, OnInit} from '@angular/core';
import {PacienteService} from 'src/app/services/paciente.service';
import {EncargadoService} from '../../services/encargado.service';

@Component({
    selector: 'app-paciente',
    templateUrl: './paciente.page.html',
    styleUrls: ['./paciente.page.scss'],
})
export class PacientePage implements OnInit {

    pacientes = [];

    constructor(public pacienteService: PacienteService, private encargadoService: EncargadoService) {
        this.encargadoService.getPacientes().subscribe((res: any) => {
            this.pacientes = res;
            console.log(this.pacientes);
        });
    }

    ngOnInit() {
    }

    info(id) {
        console.log(id);
    }
}


