import { Component } from '@angular/core';
import {ViewController, NavController,  NavParams} from 'ionic-angular';
<<<<<<< HEAD
import { DatabaseProvider } from '../../providers/database/database';
import { LugaresPage } from '../lugares/lugares';
=======
import { DatabaseProvider } from '../../providers/database/database'
>>>>>>> ef68664927552ae3adba4232811770b9e9178236

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
<<<<<<< HEAD
   lugares(){
      this.navCtrl.push(LugaresPage);
  }
=======
>>>>>>> ef68664927552ae3adba4232811770b9e9178236

}

