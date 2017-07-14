import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage }    from '../menu/menu';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
//POPUP
import { AlertController } from 'ionic-angular';
import { AuthenticationProvider } from "../../providers/authentication/authentication";


@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {
  private user: User;
  private passwordConfirmation: string;
  loading: boolean;

  constructor(public navCtrl: NavController,  
              public alertCtrl: AlertController,
              private authenticationProvider: AuthenticationProvider) {
    this.user = new User();
  }

  //POPUP
  showAlert(){
   let alert = this.alertCtrl.create({
     title: 'Alert!',
     subTitle: 'Hello! AllForOne is an app for the purpose of uniting women for the exchange of information, service evaluations and places. Only the register of women is authorized. Thank you for your cooperation. ',
     buttons: ['OK']
   });
   alert.present();
   
     
  }

  signup(){
    if(!this.loading) {
      this.loading = true;

      this.validateUser().then(() => {
        this.authenticationProvider.signup(this.user).then(() => {
          this.navCtrl.push(MenuPage);
          this.loading = false;
        }).catch(error => {
          alert("Failed creating your account.");
        });
      }).catch((errors: Array<string>) => {
        alert('Could not create your account. Please check the following information: ' + errors.join(" "));
      });
    } 
  }

  validateUser() {
    let promise = new Promise((resolve, reject) => {
      let errors = [];

      if(!this.user.password || this.user.password !== this.passwordConfirmation) {
        errors.push('Passwords do not match.');
      }

      if(!this.user.name) {
        errors.push('Invalid name.');
      }

      if(!this.user.email) {
        errors.push('Invalid email.');
      }

      if(errors.length > 0) {
        reject(errors);
      } else {
        resolve();
      }
    });

    return promise;
  }
  
  home(){
      this.navCtrl.push(HomePage);
  }
}
