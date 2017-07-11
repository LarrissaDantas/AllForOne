import {DatabaseProvider} from '../../providers/database/database';
import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import { CadastrolPage } from '../cadastrol/cadastrol';
import { FiltrolPage } from '../filtrol/filtrol';
import {PerfillugarPage} from '../perfillugar/perfillugar';

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
      this.navCtrl.push(CadastrolPage);
  }

  filtrol(){
    this.navCtrl.push(FiltrolPage);
  }
   perfillugar(){
      this.navCtrl.push(PerfillugarPage);
  }

  get places() {
    return this.databaseProvider.places;
  }
}
