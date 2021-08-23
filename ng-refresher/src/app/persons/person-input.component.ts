import { Component, Output, EventEmitter } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent{
  @Output() personCreate = new EventEmitter<string>();

  constructor(private prsService: PersonsService) {
    this.prsService = prsService;
  }

  enteredPersonName = "";

  onAddPerson() {
    console.log('Created person: ' + this.enteredPersonName);
    this.prsService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
