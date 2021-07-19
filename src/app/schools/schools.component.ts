import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  //template:'<app-school></app-school>',
  styleUrls: ['./schools.component.css'],
})
export class SchoolsComponent implements OnInit {
  aceitaNovaEscola = false;
  createdSchoolStatus = 'Nenhuma escola criada.';
  nomeEscola = 'Escolinha do Zé!';
  schoolCreated = false;
  schools = ['Escolations', 'escolives'];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.aceitaNovaEscola = true;
    }, 5000);
  }

  createSchool() {
    this.schoolCreated = true;
    this.createdSchoolStatus = 'Escola criada' + this.createdSchoolStatus;
    this.schools.push(this.nomeEscola);
  }

  updateEscola(event: Event) {
    this.nomeEscola = (<HTMLInputElement>event.target).value;
  }
}
