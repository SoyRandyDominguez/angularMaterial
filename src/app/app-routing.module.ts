import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MapsComponent } from './components/maps/maps.component';
const routes: Routes = [
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{ path: 'home', component: HomeComponent },
{ path: 'maps', component: MapsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
