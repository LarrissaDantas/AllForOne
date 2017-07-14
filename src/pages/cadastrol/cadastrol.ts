import {DatabaseProvider} from '../../providers/database/database';
import { Component } from '@angular/core';
import {ViewController, NavController,  NavParams} from 'ionic-angular';
import { Place } from '../../models/place';
import { LugaresPage } from '../lugares/lugares';

@Component({
  selector: 'page-cadastrol',
  templateUrl: 'cadastrol.html'
})
export class CadastrolPage {
  novoLugar: Place;
  loading: boolean;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public databaseProvider: DatabaseProvider,
              private viewCtrl: ViewController) {
    this.novoLugar = new Place();
  }

  addPlace() {
    this.loading = true;
    this.databaseProvider.addPlace(this.novoLugar).then(() => {
      this.loading = false;
      this.viewCtrl.dismiss();
    }).catch(error => {
      alert('We could not register this place.');
    });
  }

lugares(){
      this.navCtrl.push(LugaresPage);
  }


}
