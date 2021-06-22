import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef,MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeDataService } from '../employeedata.service';
import * as _ from 'lodash';
import { GetsqldataserviceService } from 'src/app/getdatacomponent/getsqldataservice.service';

export interface DialogData {
  empcode: number;
  name: string;
  age:number;
  department:string;
  salary:string;
}


@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialogComponent implements OnInit {
  Empcodeval:string = '';
  dataByItem=new Array();

  constructor(  private servicedata: EmployeeDataService,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    private getdatafromservice :GetsqldataserviceService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ) {}

  ngOnInit(): void {
debugger
    this.servicedata.currentMessage.subscribe(arraydata => this.dataByItem = arraydata)
    this.Empcodeval  = this.dataByItem[0].empcode;
    this.popupForm.setValue(_.omit(this.dataByItem[0],'empcode','_id'));
  }

  popupForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    salary: new FormControl(''),
    department:new FormControl('')

    
  });


 

    closedialg(): void {
    this.dialogRef.close();
  }
   
  updatedata()
  {
    debugger
    console.log(this.popupForm);
    this.getdatafromservice.updateEmpData(this.dataByItem[0]).subscribe(
      res => {console.log(res)});
  }
  

}

