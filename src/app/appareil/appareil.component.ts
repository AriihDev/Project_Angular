import { Component, Input, OnInit } from '@angular/core';
import { appareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName !: string 
  @Input() appareilStatus ! : string 
  @Input()
  indexOfAppareil!: number;

  constructor(private appareilService: appareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {

    if(this.appareilStatus === 'allumer') {
      return  'green';
    } else if (this.appareilStatus ==='eteint') {
      return 'red';
    } return
  }

  onSwitchOn() {

    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff() {

    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}

