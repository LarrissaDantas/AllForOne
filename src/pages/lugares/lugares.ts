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

  category: string;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public databaseProvider: DatabaseProvider) {

  }

  cadastrol(){
      this.navCtrl.push(CadastrolPage);
  }

  filtrol(){
    let modal = this.modalCtrl.create(FiltrolPage);
    modal.onDidDismiss(category => {
      this.category = category;
    });
    modal.present();
  }
  
  openPage(place){
      this.navCtrl.push(PerfillugarPage, { place: place });
  }

  get places() {
    return this.databaseProvider.places;
  }
}

