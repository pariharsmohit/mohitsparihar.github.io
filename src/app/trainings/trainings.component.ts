import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService) { }

  trainings: [];

  ngOnInit(): void {
    this.httpService.getResumeData()
      .subscribe((data: any) => {
        this.trainings = data.trainings;
      });
  }

  ngOnDestroy(): void {
  }

}
