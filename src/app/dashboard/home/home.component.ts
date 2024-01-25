import { Component, OnInit } from '@angular/core';
import { General } from 'src/app/models/general';
import { HomeService } from './service/home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading$!: Observable<boolean>;
  general$!: Observable<General[]>;

  constructor(private homeService: HomeService) {
    this.general$ =  homeService.entities$;
     this.loading$ = homeService.loading$;
   }

  ngOnInit(): void {
    this.getGeneral();
  }

  getGeneral(){
    this.homeService.getAll();
  }

}
