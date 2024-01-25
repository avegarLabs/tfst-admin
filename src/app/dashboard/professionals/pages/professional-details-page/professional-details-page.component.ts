import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../../service/details.service';

@Component({
  selector: 'app-professional-details-page',
  templateUrl: './professional-details-page.component.html',
  styleUrls: ['./professional-details-page.component.scss']
})
export class ProfessionalDetailsPageComponent implements OnInit {

  professional!:any;  
  skills!:any[];
  titles!:any[];
  positions!:any[];
  services!:any[];

  constructor(
    private actRoute: ActivatedRoute,
    private readonly detailsService: DetailsService,
  ) { }

  ngOnInit(): void {
    let param = this.actRoute.snapshot.params['moniker']
    this.getProfessionalDetails(param)
  }

  getProfessionalDetails(moniker: string) {
    return this.detailsService.details(moniker).subscribe(resut => {
      this.professional=resut;
      this.getSkills();
      this.getTitles();
      this.getPositions();
      this.getServices();
    })
  }

  getSkills(){
    this.detailsService.listSkills(this.professional.id).subscribe(
     skills=>{
       this.skills=skills
     })
 }

 getTitles(){
  this.detailsService.listTitles(this.professional.id).subscribe(
   titles=>{
     this.titles=titles
   })
}

getPositions(){
  this.detailsService.listPositions(this.professional.id).subscribe(
   positions=>{
     this.positions=positions
   })
}

getServices(){
  this.detailsService.listServices(this.professional.id).subscribe(
   services=>{
     this.services=services
   })
}

}
