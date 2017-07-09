import {DatabaseProvider} from '../../providers/database/database';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CadastromPage } from '../cadastrom/cadastrom';
import { FiltromPage } from '../filtrom/filtrom';


@Component({
  selector: 'page-medicos',
  templateUrl: 'medicos.html'
})
export class MedicosPage {

  constructor(public navCtrl: NavController,
              public databaseProvider: DatabaseProvider,
              private modalCtrl: ModalController) {

  }

  cadastrom(){
      let modal = this.modalCtrl.create(CadastromPage);
      modal.present();
  }
  filtrom(){
      this.navCtrl.push(FiltromPage);
  }

  get professionals() {
    return this.databaseProvider.professionals;
  }

}
