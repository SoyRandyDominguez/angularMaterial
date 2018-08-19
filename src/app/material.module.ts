import {MatButtonModule, MatIconModule ,MatToolbarModule, MatMenuModule, MatFormFieldModule} from '@angular/material';
import { NgModule } from '../../node_modules/@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatToolbarModule,
    MatMenuModule, MatFormFieldModule, MatInputModule,MatGridListModule,MatListModule],

  
  exports: [MatButtonModule, MatIconModule, MatToolbarModule,
     MatMenuModule, MatFormFieldModule, MatInputModule,MatGridListModule,MatListModule],
})
export class MaterialModule { }