import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async misionAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Misión',
      message: 'Queremos garantizar la seguridad, el bienestar y aumentar la calidad de vida de las personas con Alzheimer.',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Boton OK');
          }
        }
      ]
    });

    await alert.present();
  }

  async visionAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Visión',
      message: 'Este es el mensaje de la alerta',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Boton OK');
          }
        }
      ]
    });

    await alert.present();
  }

}
