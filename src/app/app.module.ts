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
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';


const appRoutes: Routes = [

{ path: 'appareils', canActivate:[AuthGuard],component:AppareilViewComponent},
{ path: 'appareils/:id', canActivate:[AuthGuard],component:SingleAppareilComponent},
{ path: 'edit', canActivate: [AuthGuard],component:EditAppareilComponent},
{ path: 'auth', component: AuthComponent },
{ path: '',component:AppareilViewComponent},
{ path: 'not-found',component:FourOhFourComponent},
{ path: '**', redirectTo: '/not-found'}

];


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    appareilService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
