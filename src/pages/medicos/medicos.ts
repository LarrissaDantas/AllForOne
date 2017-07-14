import {DatabaseProvider} from '../../providers/database/database';
import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import { CadastromPage } from '../cadastrom/cadastrom';
import { FiltromPage } from '../filtrom/filtrom';
import {PerfilsaudePage} from '../perfilsaude/perfilsaude';


@Component({
  selector: 'page-medicos',
  templateUrl: 'medicos.html'
})
export class MedicosPage {
  currentCategory: string;

  constructor(public navCtrl: NavController,
              public databaseProvider: DatabaseProvider,
              public modalCtrl: ModalController) {

  }

  cadastrom(){
      this.navCtrl.push(CadastromPage);
  }

  filtrom(){
      let modal = this.modalCtrl.create(FiltromPage);
      modal.onDidDismiss(category => {
        this.currentCategory = category;
      });
      modal.present();
  }
  openPage(professional){
      this.navCtrl.push(PerfilsaudePage, { professional: professional });
  }


  get professionals() {
    return this.databaseProvider.professionals;
  }

}
