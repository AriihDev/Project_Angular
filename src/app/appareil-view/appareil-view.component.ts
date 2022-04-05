import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { appareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {


  isAuth = false;

  lastUpdate: Promise<Date> = new Promise(
    (resolve,reject) => { 
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  }
  
  );

  appareils: any[] = [];
  appareilSubscription!: Subscription;

  // appareilOne='Machine à laver ';
  // appareilTwo='PC fixe';
  // appareilThree='Lumiere Salon';

  constructor(private appareilService: appareilService) {
    setTimeout (
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
  
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOfffAll();
  }

  onSave() {
    this.appareilService.saveAppareilsToServer();
  }

  onFetch() {
    this.appareilService.getAppareilFromServer();
  }

}
