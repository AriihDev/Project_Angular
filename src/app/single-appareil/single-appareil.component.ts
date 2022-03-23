import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name : string = 'Appareil';
  status : string ='Statut';

  constructor(private appareilService:appareilService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.name = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id)?.name as string;
    this.status = this.appareilService.getAppareilById(+id)?.status as string;

  }

}
