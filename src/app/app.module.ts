import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//modules
import { MaterialModule } from './material.module';
import { UiModule } from './ui/ui.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { environment } from './../environments/environment';
import { AgmCoreModule } from '@agm/core';
//services
import { TodoService } from './services/todo.service';
import { GeoServiceService } from './services/geo-service.service';


//componentes
import { HomeComponent } from './components/home/home.component';
import { MapsComponent } from './components/maps/maps.component';
import { TodoComponent } from './components/todo/todo.component';
import { GoogleMapComponent } from './components/maps/google-map/google-map.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapsComponent,
    TodoComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot( {
      apiKey: environment.googleMapsKey
    })
  ],
  providers: [TodoService, GeoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
