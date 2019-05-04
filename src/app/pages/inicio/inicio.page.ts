import {Component, OnInit} from '@angular/core';
import {AlertsService} from '../../services/alerts.service';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

    constructor(private alertService: AlertsService) {
    }

    ngOnInit() {
    }


}

