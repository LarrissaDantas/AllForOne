import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { User } from "../../models/user";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Place } from '../../models/place';
import { HealthProfessional } from '../../models/health-professional';
import { Rate } from "../../models/rate";
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

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.listen();
      } 
    });
  }

  listen() {
    firebase.database().ref('places').on('child_added', snapshot => {
      this.parseAndSavePlace(snapshot);
    });

    firebase.database().ref('health_professionals').on('child_added', snapshot => {
      this.parseAndSaveHealthProfessional(snapshot);
    });

  }

  getProfessionalsCategories() {
    return new Set(this.professionals.getValue().map(professional => {
      return professional.category;
    }));
  }

  getPlacesCategories() {
    return new Set(this.places.getValue().map(place => {
      return place.category;
    }));
  }

  parseAndSaveHealthProfessional(snapshot) {
    if(snapshot.val()) {
      let professional = this.parseSnapshot(snapshot, new HealthProfessional());

      let professionals = this.professionals.getValue();
      professionals.push(professional);
    
      this.professionals.next(professionals);
    }
  }

  parseAndSavePlace(snapshot) {
    if(snapshot.val()) {
      let place = this.parseSnapshot(snapshot, new Place());

      let places = this.places.getValue();
      places.push(place);
    
      this.places.next(places);
    }
  }

  parseSnapshot(snapshot, returnObj) {
    for(let key in snapshot.val()) {
      returnObj[key] = snapshot.val()[key];
    }

    returnObj.id = snapshot.key;

    return returnObj;
  }

  addPlace(place: Place) {
    return firebase.database().ref('places').push().set(place);
  }

  addProfessional(professional: HealthProfessional) {
    return firebase.database().ref('health_professionals').push().set(professional);
  }

  rateProfessional(professional: HealthProfessional, rate: Rate) {
    let ref = firebase.database().ref('health_professionals').child(professional.id).child('ratings');
    rate.id = ref.push().key;
    return ref.child(rate.id).set(rate);
  }

  ratePlace(place: Place, rate: Rate) {
    let ref = firebase.database().ref('places').child(place.id).child('ratings');
    rate.id = ref.push().key;
    return ref.child(rate.id).set(rate);
  }

  saveUserInfo(user: User) {
    delete user.email;
    delete user.password;

    return firebase.database().ref('users').child(firebase.auth().currentUser.uid).set(user);
  }

}

