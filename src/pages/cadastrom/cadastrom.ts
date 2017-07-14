import {DatabaseProvider} from '../../providers/database/database';
import { Component } from '@angular/core';
import {ViewController, NavController,  NavParams} from 'ionic-angular';
import { HealthProfessional } from '../../models/health-professional';
import { MedicosPage } from '../medicos/medicos';
@Component({
  selector: 'page-cadastrom',
  templateUrl: 'cadastrom.html'
})
export class CadastromPage {
  novo: HealthProfessional;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public databaseProvider: DatabaseProvider,
              public viewCtrl: ViewController) {
    this.novo = new HealthProfessional();

  }

  addProfessional() {
    this.databaseProvider.addProfessional(this.novo).then(() => {
      this.viewCtrl.dismiss();
    }).catch(error => {
      alert('We could not register this health professional/place');
    });
  }

medicos(){
      this.navCtrl.push(MedicosPage);
  }


}
