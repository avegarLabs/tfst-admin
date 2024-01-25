import { Job } from 'src/app/models/job';
import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  job!:Job;

  constructor(
    private jobService:JobService,
    private actRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    let param = this.actRoute.snapshot.params['moniker']
    this.getJob(param)
  }

  getJob(moniker:string){
    this.jobService.getByKey(moniker).subscribe(
      res=>{
        this.job=res
    })
  }

}
