import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Opcion } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


  Opciones: Opcion[] = [{
    icon: 'person',
    titulo: 'Paciente',
    redirectTo: '/paciente'
},
{
    icon: 'calendar',
    titulo: 'Cronograma',
    redirectTo: '/cronograma'
},
{
    icon: 'contacts',
    titulo: 'Nosotros',
    redirectTo: '/nosotros'
}
];

  constructor() { }

  ngOnInit() {

  }

}
export interface Opcion {
  icon: string;
  titulo: string;
  redirectTo: string;
}
