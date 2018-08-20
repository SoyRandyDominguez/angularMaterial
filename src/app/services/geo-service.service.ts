import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';




@Injectable({
  providedIn: 'root'
})
export class GeoServiceService {
  
  locationsList: AngularFireList<any>;
  
  constructor(private db: AngularFireDatabase) {

   }

   getLocations(){
    this.locationsList = this.db.list('locations');
    return this.locationsList;
  }

  addLocation(Latitude:number,Longitude: number){
    this.locationsList.push(
      {
        Latitude: Latitude,
        Longitude:Longitude
      }
    );
  }

}
