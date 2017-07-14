import { Component } from '@angular/core';
import {ViewController, NavController,  NavParams} from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { LugaresPage } from '../lugares/lugares';

@Component({
  selector: 'page-filtrol',
  templateUrl: 'filtrol.html'
})
export class FiltrolPage {


  category: string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private databaseProvider: DatabaseProvider) {

  }

  choose(category) {
    this.viewCtrl.dismiss(category);
  }

  get categories() {
    return this.databaseProvider.getPlacesCategories();
  }

   lugares(){
      this.viewCtrl.dismiss();
  }
}

