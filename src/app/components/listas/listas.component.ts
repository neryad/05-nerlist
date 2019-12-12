import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @ViewChild (IonList , {static: false} ) lista: IonList;
  @Input() terminada = true;

  constructor( public deseosSevices: DeseosService, public router: Router, private alertCtrl: AlertController) {


   }
   listaSelecionad(lista: Lista) {
    if  ( this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }



  }
  borrarLista( lista: Lista ) {
    this.deseosSevices.borrarLista( lista );
  }

  async editarLista(lista: Lista) {
    const alert = await this.alertCtrl.create({
      header: 'Editar Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
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
            text: 'Editar',
            handler: (data) => {
              if (data.titulo.lenght === 0 ) {
                return;
              }
              lista.titulo = data.titulo;
              this.deseosSevices.guardarStorage();
              this.lista.closeSlidingItems();
            }
          }
      ]
    });

    alert.present();

  }

  ngOnInit() {}

}
