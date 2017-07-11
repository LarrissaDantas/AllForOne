import {DatabaseProvider} from '../../providers/database/database';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastromPage } from '../cadastrom/cadastrom';
import { FiltromPage } from '../filtrom/filtrom';
import {PerfilsaudePage} from '../perfilsaude/perfilsaude';


@Component({
  selector: 'page-medicos',
  templateUrl: 'medicos.html'
})
export class MedicosPage {

  constructor(public navCtrl: NavController,
              public databaseProvider: DatabaseProvider) {

  }

  cadastrom(){
      this.navCtrl.push(CadastromPage);
  }
  filtrom(){
      this.navCtrl.push(FiltromPage);
  }
  openPage(professional){
      this.navCtrl.push(PerfilsaudePage, { professional: professional });
  }


  get professionals() {
    return this.databaseProvider.professionals;
  }

}
