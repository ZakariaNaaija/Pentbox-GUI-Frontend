import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ButtonsModule, WavesModule, CardsModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncoderDecoderComponent } from './encoder-decoder/encoder-decoder.component';
import { HasherComponent } from './hasher/hasher.component';
import { PasswordCrackerComponent } from './password-cracker/password-cracker.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BadgeModule, IconsModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    AppComponent,
    EncoderDecoderComponent,
    HasherComponent,
    PasswordCrackerComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    CardsModule,
    WavesModule,
    IconsModule,
    BadgeModule,
    ButtonsModule,
    FormsModule,
    HttpClientModule
    

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
