import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }

  addPerson(data:any){
    return this.http.post(`${environment.api_url}/persons/data`, data).toPromise();
  }

  getTotalDistance(personId:string, start:number, end:number){
    return this.http.post(`${environment.api_url}/persons/total-distance`, {person_id:personId, start, end}).toPromise();
  }

}
