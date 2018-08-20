import { Component, OnInit } from '@angular/core';
import { GeoServiceService } from './../../../services/geo-service.service';
@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  lat:number;
  lng:number;
  markers: any[];
  constructor(private service: GeoServiceService) { }

  ngOnInit() {
    this.getUserLocation()
    
    this.service.getLocations().snapshotChanges()
    .subscribe(
      item=> {
        this.markers = [];
        item.forEach(element => {
          var x = element.payload.toJSON();
          x['$key']= element.key;
          this.markers.push(x);
        })
        
      }
    )


  }

  private getUserLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
}
