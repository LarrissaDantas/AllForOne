import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HealthProfessional } from "../../models/health-professional";



@Component({
  selector: 'page-perfilsaude',
  templateUrl: 'perfilsaude.html'
})
export class PerfilsaudePage {
  professional: HealthProfessional;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.professional = this.navParams.get('professional');

  }
}