import {DatabaseProvider} from '../../providers/database/database';
import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import { CadastrolPage } from '../cadastrol/cadastrol';
import { FiltrolPage } from '../filtrol/filtrol';


@Component({
  selector: 'page-lugares',
  templateUrl: 'lugares.html'
})
export class LugaresPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public databaseProvider: DatabaseProvider) {

  }

  cadastrol(){
    let modal = this.modalCtrl.create(CadastrolPage);
    modal.present();
  }

  filtrol(){
    this.navCtrl.push(FiltrolPage);
  }

  get places() {
    return this.databaseProvider.places;
  }
}
