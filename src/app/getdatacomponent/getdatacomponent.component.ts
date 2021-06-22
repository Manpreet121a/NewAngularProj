import { Component, OnInit } from '@angular/core';
import { GetsqldataserviceService } from './getsqldataservice.service';

@Component({
  selector: 'app-getdatacomponent',
  templateUrl: './getdatacomponent.component.html',
  styleUrls: ['./getdatacomponent.component.css']
})
export class GetdatacomponentComponent implements OnInit {

  dataEmployee = new Array();

  dataEmpmongo = new Array();


  constructor(private service : GetsqldataserviceService) { }

  ngOnInit(): void {

    this.funct('Ronaldo','manpreet','pele','messi','Edan');


    this.service.getdata().subscribe(
      data => {
        this.dataEmployee = data.recordset,
        console.log(this.dataEmployee); 
     }, 
     error => { throw error }
    )
  
    this.service.getdatamongo().subscribe(
      data => {
        this.dataEmpmongo = data.userData,
        console.log(this.dataEmpmongo); 
     }, 
     error => { throw error }
    )
}

funct = (a: any, b: any, ...c: any) => {
  debugger
 console.log(`${a} ${b}`);
 console.log(c);
 console.log(c[0]);
 console.log(c.length);
 console.log(c.indexOf('Edan'));
}

}
