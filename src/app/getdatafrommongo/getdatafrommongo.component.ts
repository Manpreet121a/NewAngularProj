import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GetsqldataserviceService } from '../getdatacomponent/getsqldataservice.service';
import {MatDialog, MatDialogRef,MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { EmployeeDataService } from './employeedata.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-getdatafrommongo',
  templateUrl: './getdatafrommongo.component.html',
  styleUrls: ['./getdatafrommongo.component.css']
})
export class GetdatafrommongoComponent implements OnInit {
  dataEmpmongo = new Array();
  empcode: number = 0;
  name: string = '';
  age:number = 0;
  department:string = '';
  salary:string = '';
  dataByItem = new Array();
  constructor(private getdatafromservice :GetsqldataserviceService,
    public dialog: MatDialog,
    private data: EmployeeDataService) { }

  ngOnInit(): void {

    
    this.getDataFromMongo();

  }
  profileForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    salary: new FormControl(''),
    department:new FormControl(''),
    empcode:new FormControl('')
  });

  submit() {
    
    console.log(this.profileForm.value);

    this.getdatafromservice.insetDataMongo(this.profileForm.value).subscribe(
      res => {console.log(res)});
      this.getDataFromMongo();
  }

  

  getDataFromMongo()
  {
    this.getdatafromservice.getdatamongo().subscribe(
      data => {
        this.dataEmpmongo = data.userData,
        console.log(this.dataEmpmongo); 
     }, 
     error => { throw error }
    )
  }

  deleteempdata(empcode:number)
  {
    debugger
    if(confirm('Are you want to sure to delete selected data'))
    {

      this.getdatafromservice.deleteEmpData(JSON.stringify(empcode)).subscribe(
        res => {console.log(res)});
    }
   
  }

  editempdata(empcodeevent:number)
  {
     const dailogp = new MatDialogConfig();
     dailogp.disableClose = true;
     dailogp.width = "50%";
     
     this.dialog.open(DialogOverviewExampleDialogComponent,dailogp);

     this.dataByItem = this.dataEmpmongo.filter((currentValue, index, arr)=>currentValue.empcode ==empcodeevent );

     console.log(this.dataByItem);
     this.data.changeData(this.dataByItem);
  }
   
  }

