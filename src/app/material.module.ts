import {MatButtonModule, MatIconModule ,MatToolbarModule, MatMenuModule} from '@angular/material';
import { NgModule } from '../../node_modules/@angular/core';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatToolbarModule,MatMenuModule],
  exports: [MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule],
})
export class MaterialModule { }