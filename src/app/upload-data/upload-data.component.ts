import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { NbToastrService } from '@nebular/theme';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.scss']
})
export class UploadDataComponent implements OnInit {
  data:any;
  name:string;
  showSuccessAlert:boolean;
  uploadedPersonId:string;
  autohide:boolean;
  personId:string;
  dateRange:any;

  dataLoading:boolean;
  fileName:string;
  distanceLoading:boolean;

  constructor(private personService:PersonService, private toastrService:NbToastrService, private dialogService: NbDialogService) { 
    this.showSuccessAlert=false;
    this.autohide=true;
    this.dataLoading=false;
    this.distanceLoading=false;
  }

  ngOnInit(): void {
  }

  fileSelected(event){
    this.fileName=event.target.files[0].name;
    let reader=new FileReader();
    reader.onload=(ev)=>{
      
      this.data=JSON.parse(ev.target.result as any);
      console.log(this.data);
    }

    reader.readAsText(event.target.files[0]);
  }

  async getTotalDistance(dialog){
    this.distanceLoading=true;
    if(this.dateRange && this.personId){
      console.log(this.dateRange.start.getTime());
      const start=this.dateRange.start.getTime();
      const end=this.dateRange.end.getTime()
      
      const response=await this.personService.getTotalDistance(this.personId, start, end) as any;
  
      if(response.errorType){
        this.toastrService.show(response.errorMessage, response.errorType, {status:"danger"});
      }else{
        this.dialogService.open(dialog, {context:response})
      }
    }else{
      this.toastrService.show("All fields are compulsory", "Error", {status:"danger"});
    }

    this.distanceLoading=false

  }

  async addPerson(){
    this.dataLoading=true;
    try{
      if(this.name && this.data){
        const data={
          data:this.data,
          name:this.name
        };
    
        console.log(data);
        const response=await this.personService.addPerson(data);
        console.log(response);
        this.uploadedPersonId=(response as any).person_id;
        this.showSuccessAlert=true;
      }else{
        this.toastrService.show("All fields are compulsory", "Error", {status:"danger"});
      }
    }catch(err){
      console.log(err);
      this.toastrService.show("Some error occured", "Error", {status:"danger"});
    }
    this.dataLoading=false;
  }

}
