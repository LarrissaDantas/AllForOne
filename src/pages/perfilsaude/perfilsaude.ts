import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HealthProfessional } from "../../models/health-professional";
import { Rate } from "../../models/rate";
import { DatabaseProvider } from "../../providers/database/database";



@Component({
  selector: 'page-perfilsaude',
  templateUrl: 'perfilsaude.html'
})
export class PerfilsaudePage {
  professional: HealthProfessional;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private databaseProvider: DatabaseProvider,
  public ngZone: NgZone) {
    this.professional = this.navParams.get('professional');
    console.log(this.professional);
  }

  rate() {
    let prompt = this.alertCtrl.create({
      title: 'Rate',
      message: "Enter a comment about your experience with " + this.professional.name + ":",
      inputs: [
        {
          name: 'rate',
          placeholder: 'Rate (from 1 to 5)'
        },
        {
          name: 'comment',
          placeholder: 'Comment'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            
          }
        },
        {
          text: 'Save',
          handler: data => {
            let rate = new Rate();
            rate.comment = data.comment;
            rate.rate = parseInt(data.rate);

            this.databaseProvider.rateProfessional(this.professional, rate).then(() => {
              this.ngZone.run(() => {
                 this.professional.ratings[rate.id] = rate;
              });
            });
          }
        }
      ]
    });

    prompt.present();
  }

  getAverageRate(): number {
    return this.professional.getAverageRate();
  }
}