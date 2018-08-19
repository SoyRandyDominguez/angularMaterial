import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './../material.module';
import { AppRoutingModule } from './../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports:[HeaderComponent, FooterComponent]
})
export class UiModule { }
