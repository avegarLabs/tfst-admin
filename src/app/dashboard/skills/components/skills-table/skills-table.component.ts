import { Skill } from './../../../../models/skills';
import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { SkillsEditDialogComponent } from '../skills-edit-dialog/skills-edit-dialog.component';
import { SkillsDeleteDialogComponent } from '../skills-delete-dialog/skills-delete-dialog.component';
import { Observable } from 'rxjs';
import { SkillsService } from '../../service/skills.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntityCollectionServiceFactory } from '@ngrx/data';


@Component({
  selector: 'app-skills-table',
  templateUrl: './skills-table.component.html',
  styleUrls: ['./skills-table.component.scss'] 
})
export class SkillsTableComponent implements OnInit {

  loading$!: Observable<boolean>;
  skills$!: Observable<Skill[]>;
  larg!: Skill[];


  displayedColumns: string[] = ['id', 'name','options'];
  dataSource!: MatTableDataSource<Skill>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private skillService: SkillsService,
    ) {

      this.skills$ =  skillService.entities$;
      this.loading$ = skillService.loading$;
   }

  ngOnInit(): void {
    this.getSkills();
    this.addData();
  }

  getSkills() {
    this.skillService.getAll();
  }

  addData(){
    this.skills$.subscribe(data=>{
      this.larg=data;
      this.dataSource= new  MatTableDataSource (this.larg);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage(); 
    }
  }
  

  editSkill(skill:Skill){
    const dialogRef = this.dialog.open(SkillsEditDialogComponent, {data:skill});
  }


  deleteSkill(skill:Skill){
    const dialogRef = this.dialog.open(SkillsDeleteDialogComponent, {data:skill});
  }


} 

