import { Component, OnDestroy, OnInit } from "@angular/core";
import { PersonsService } from "./persons.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy {
  personList!: string[];
  private personListSubs!: Subscription;

  constructor(private prsService: PersonsService) {
    this.prsService = prsService;
  }

  ngOnDestroy(): void {
    this.personListSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.personList = this.prsService.persons;
    this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons;
    });
  }

  onRemovePerson(name: string) {
    this.prsService.removePewrson(name);
  }
}
