import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public deseosSevices: DeseosService, private router: Router, private alertCtrl: AlertController) {

  }
  async agregarLista() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelar');
          }
        },
          {
            text: 'Crear',
            handler: (data) => {
              console.log(data);
              if (data.titulo.lenght === 0 ) {
                return;
              }
              const listaId = this.deseosSevices.creaLista(data.titulo);
              // this.deseosSevices.creaLista(data.titulo);
              this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
            }
          }
      ]
    });

    alert.present();
    // this.router.navigateByUrl('/tabs/tab1/agregar');
  }
}
