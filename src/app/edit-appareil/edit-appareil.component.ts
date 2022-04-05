import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { appareilService } from '../services/appareil.service';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = 'eteint';

  constructor(private appareilService: appareilService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    
    const name = form.value ['name'];
    const status = form.value ['status'];

    this.appareilService.addAppareil(name,status);
    this.router.navigate(['/appareils']);

  }

}
