import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { AppareilComponent } from './appareil/appareil.component';

import { appareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthService } from './services/auth.service';


const appRoutes: Routes = [

{ path: 'appareils', component:AppareilViewComponent},
{ path: 'auth', component: AuthComponent },
{ path: '',component:AppareilViewComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    appareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
