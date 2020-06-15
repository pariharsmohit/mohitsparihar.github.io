import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpService } from './../http.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {
  skills: [];
  resumeDataSubscription: Subscription;
  constructor(private httpService: HttpService) { }


  ngOnInit(): void {
    this.httpService.getResumeData()
      .subscribe((data: any) => {
        this.skills = data.skills;
      });
  }

  ngOnDestroy(): void {
  }

}
