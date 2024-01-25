import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../../service/details.service';

@Component({
  selector: 'app-professional-management-page',
  templateUrl: './professional-management-page.component.html',
  styleUrls: ['./professional-management-page.component.scss']
})
export class ProfessionalManagementPageComponent implements OnInit {

  professional!: any

  constructor(private professionalService: DetailsService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let moniker = this.actRoute.snapshot.params['moniker']
    this.getProfessionalDetails(moniker) 
  }

  getProfessionalDetails(moniker:string){
    this.professionalService.details(moniker).subscribe(pro => {
      this.professional = pro
    }) 
  }

}
