import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpService } from '../http.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personal-project',
  templateUrl: './personal-project.component.html',
  styleUrls: ['./personal-project.component.scss']
})
export class PersonalProjectComponent implements OnInit, OnDestroy {
  personalProjects: any;
  resumeDataSubscription: Subscription;
  constructor(private httpService: HttpService) { }


  ngOnInit(): void {
    this.httpService.getResumeData()
      .subscribe((data: any) => {
        this.personalProjects = data.personalProjects;
        // this.personalProjects = [...data.personalProjects, ...data.personalProjects];
      });
  }

  ngOnDestroy(): void {
  }

}
