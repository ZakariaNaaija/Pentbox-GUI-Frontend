import { SymmetricComponent } from './symmetric/symmetric.component';
import { AsymmetricComponent } from './asymmetric/asymmetric.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncoderDecoderComponent } from './encoder-decoder/encoder-decoder.component';
import { HasherComponent } from './hasher/hasher.component';
import { MainComponent } from './main/main.component';
import { PasswordCrackerComponent } from './password-cracker/password-cracker.component';


const routes: Routes = [
  {path:"encoder-decoder",component:EncoderDecoderComponent},
  {path:"password-cracker",component:PasswordCrackerComponent},
  {path:"hasher",component:HasherComponent},
  {path:"symmetric",component:SymmetricComponent},
  {path:"asymmetric",component:AsymmetricComponent},
  {path:"",component:MainComponent},
  {path:"**",component:MainComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
