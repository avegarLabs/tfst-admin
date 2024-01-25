import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Job } from 'src/app/models/job';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService extends EntityCollectionServiceBase<Job> {

  private apiUrl= environment.apiBaseUrl

  constructor(
    private http: HttpClient,
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    ) {
    super('Job', serviceElementsFactory);
  }

  changeStatusJob(jobId:string,status:string){
    const url= `${this.apiUrl}job/${jobId}/state/${status}`;
    return this.http.put(url,status)
  }
} 
