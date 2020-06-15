import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpService } from '../http.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  experience : [];
  resumeDataSubscription: Subscription
  constructor(private httpService: HttpService) { }


  ngOnInit(): void {
    this.httpService.getResumeData()
      .subscribe((data: any) => {
        this.experience = data.experience;
      });
  }

  ngOnDestroy(): void {
  }

}
