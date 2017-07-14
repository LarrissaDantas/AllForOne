import { Component,NgZone} from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { Place } from "../../models/place";
import { Rate } from "../../models/rate";
import { DatabaseProvider } from "../../providers/database/database";



@Component({
  selector: 'page-perfillugar',
  templateUrl: 'perfillugar.html'
})
export class PerfillugarPage {
  place: Place;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private databaseProvider: DatabaseProvider,
  public ngZone: NgZone) {
    this.place = this.navParams.get('place');
  }

  rate() {
    let prompt = this.alertCtrl.create({
      title: 'Rate',
      message: "Enter a comment about your experience with " + this.place.name + ":",
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

            this.databaseProvider.ratePlace(this.place, rate).then(() => {
              this.ngZone.run(() => {
                 this.place.ratings[rate.id] = rate;
              });
            });
          }
        }
      ]
    });

    prompt.present();
  }

  getAverageRate(): number {
    return this.place.getAverageRate();
  }
}