import {DatabaseProvider} from '../../providers/database/database';
import { Component } from '@angular/core';
import {ViewController, NavController,  NavParams} from 'ionic-angular';
import { MedicosPage } from '../medicos/medicos';
@Component({
  selector: 'page-filtrom',
  templateUrl: 'filtrom.html'
})
export class FiltromPage {
  category: string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private databaseProvider: DatabaseProvider) {

  }

  choose(category) {
    this.viewCtrl.dismiss(category);
  }

  get categories() {
    return this.databaseProvider.getProfessionalsCategories();
  }

  medicos(){
      this.viewCtrl.dismiss();
  }

}
