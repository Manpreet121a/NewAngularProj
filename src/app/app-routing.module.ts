import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetdatacomponentComponent } from './getdatacomponent/getdatacomponent.component';
import { GetdatafrommongoComponent } from './getdatafrommongo/getdatafrommongo.component';
const routes: Routes = [

{
  path:'',component:GetdatacomponentComponent
},
{
  path:'Insertdata',component:GetdatafrommongoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
