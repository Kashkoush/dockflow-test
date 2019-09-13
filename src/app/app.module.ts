import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { ShipmentComponent } from './shipment/shipment.component';
import { ShipmentService } from './shipment.service';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    ShipmentComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    HttpClientModule,
    AngularFontAwesomeModule,
  ],
  providers: [ShipmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
