import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { User } from "../../models/user";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Place } from '../../models/place';
import { HealthProfessional } from '../../models/health-professional';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  places: BehaviorSubject<Place[]>;
  professionals: BehaviorSubject<HealthProfessional[]>;

  constructor(public http: Http) {
    this.places = new BehaviorSubject([]);
    this.professionals = new BehaviorSubject([]);

    firebase.database().ref('places').on('value', snapshot => {
      if(snapshot.val()) {
        this.places.next(snapshot.val());
      }
    });

    firebase.database().ref('health_professionals').on('value', snapshot => {
      if(snapshot.val()) {
        this.professionals.next(snapshot.val());
      }
    });
  }

  addPlace(place: Place) {
    return firebase.database().ref('places').push().set(place);
  }

  addProfessional(professional: HealthProfessional) {
    return firebase.database().ref('health_professionals').push().set(professional);
  }

  saveUserInfo(user: User) {
    delete user.email;
    delete user.password;

    return firebase.database().ref('users').child(firebase.auth().currentUser.uid).set(user);
  }

}
