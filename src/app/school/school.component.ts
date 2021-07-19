import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css'],
})
export class SchoolComponent implements OnInit {
  schoolid = 10;
  schoolname = 'Escola filipe';
  situacaoEscola = 'aberta';

  getNameEscola() {
    return this.schoolname;
  }

  constructor() {
    this.situacaoEscola = Math.random() > 0.5 ? 'aberta' : 'fechada';
  }

  ngOnInit(): void {}

  getStatusColor(){
    return this.situacaoEscola == 'aberta' ? 'green' : 'red';
  }


}
