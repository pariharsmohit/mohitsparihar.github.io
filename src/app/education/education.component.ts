import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpService } from '../http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, OnDestroy {
  education: [];
  resumsDataSubscription: Subscription;
  constructor(private httpService: HttpService) { }


  ngOnInit(): void {
    this.httpService.getResumeData()
      .subscribe((data: any) => {
        this.education = data.education;
      })
  }

  ngOnDestroy(): void {
  }

}
