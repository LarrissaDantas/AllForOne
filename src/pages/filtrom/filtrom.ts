import {DatabaseProvider} from '../../providers/database/database';
import { Component } from '@angular/core';
import {ViewController, NavController,  NavParams} from 'ionic-angular';
<<<<<<< HEAD
import { MedicosPage } from '../medicos/medicos';
=======
>>>>>>> ef68664927552ae3adba4232811770b9e9178236


@Component({
  selector: 'page-filtrom',
  templateUrl: 'filtrom.html'
})
export class FiltromPage {
  category: string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private databaseProvider: DatabaseProvider) {

  }
<<<<<<< HEAD

  choose(category) {
    this.viewCtrl.dismiss(category);
=======

  choose(category) {
    this.viewCtrl.dismiss(category);
  }

  get categories() {
    return this.databaseProvider.getProfessionalsCategories();
>>>>>>> ef68664927552ae3adba4232811770b9e9178236
  }

  get categories() {
    return this.databaseProvider.getProfessionalsCategories();
  }

medicos(){
      this.navCtrl.push(MedicosPage);
  }

}
