import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpService } from '../http.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: [];
  resumeDataSubscription: Subscription
  constructor(private httpService: HttpService) { }


  ngOnInit(): void {
    this.httpService.getResumeData()
      .subscribe((data: any) => {
        this.projects = data.projects;
      });
  }

  ngOnDestroy(): void {
  }

}
