import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-salesperson',
  templateUrl: './salesperson.component.html',
  styleUrls: ['./salesperson.component.css']
})
export class SalespersonComponent implements OnInit {
 name : string = "Mohan";
  constructor() { }

salesPersonList : Person[] = [new Person("Mohan","Dongara","mohandongara@gmail.com",12666,100),
                              new Person("Upender","Mula","upender@gmail.com",13666,350),
                              new Person("Chharan","Medarametla","charan@gmail.com",14666,400)];

                              list : Person = new Person("","","",0,0);
  ngOnInit(): void {
    // this.salesPersonList.push(this.list);
  }

  onSubmit(){
    console.log(this.list);
  }

}
