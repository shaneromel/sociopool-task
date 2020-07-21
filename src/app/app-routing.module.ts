import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadDataComponent } from './upload-data/upload-data.component';


const routes: Routes = [
  {
    path:"home", component:UploadDataComponent
  },
  {
    path:"", redirectTo:"home", pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
