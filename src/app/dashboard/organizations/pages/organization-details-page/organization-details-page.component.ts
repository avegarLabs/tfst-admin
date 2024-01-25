import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from 'src/app/Core/services/organization.service';
import { Organization } from 'src/app/models/organization';

@Component({
  selector: 'app-organization-details-page',
  templateUrl: './organization-details-page.component.html',
  styleUrls: ['./organization-details-page.component.scss']
})
export class OrganizationDetailsPageComponent implements OnInit {

  organization!: Organization;
  services!:any[];

  constructor(private actRoute: ActivatedRoute, private organizationService: OrganizationService) { }

  ngOnInit(): void {
    let moniker = this.actRoute.snapshot.params['moniker'];
    this.getOrganizationDetails(moniker);
  }

  getOrganizationDetails(moniker: string) {
    this.organizationService.details(moniker).subscribe(org => {
      this.organization = org;
      this.getServices();
    });
  } 

  getServices(){
    this.organizationService.listServices(this.organization.id).subscribe(
     services=>{
       this.services=services
     })
 }

}
