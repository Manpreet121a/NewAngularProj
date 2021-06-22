import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import  'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GetsqldataserviceService {

  constructor(private http : HttpClient)
   {
}

   getdata():Observable<any> {

return this.http.get("http://localhost:5000/Get");
};

getdatamongo():Observable<any> {
  debugger
  return this.http.get("http://localhost:5000/mongoose");
  };


  insetDataMongo(insertdata:any):Observable<any>  {
    debugger
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json;charset=utf-8');
    return this.http.post("http://localhost:5000/insertData",insertdata,{headers: headers});
    }


    deleteEmpData(dataId:any):Observable<any>  {
      debugger
       const headers = new HttpHeaders();
    
       headers.set('Content-Type', 'application/json;charset=utf-8');
      return this.http.post("http://localhost:5000/deleteData",{dataId},{headers: headers});
      }

      updateEmpData(popupForm:any):Observable<any>  {
        debugger
         const headers = new HttpHeaders();
      
         headers.set('Content-Type', 'application/json;charset=utf-8');
        return this.http.post("http://localhost:5000/updateData",popupForm,{headers: headers});
        }
}


