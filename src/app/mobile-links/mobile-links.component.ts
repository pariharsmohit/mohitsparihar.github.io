import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mobile-links',
  templateUrl: './mobile-links.component.html',
  styleUrls: [
    './mobile-links.component.scss',
  ]
})
export class MobileLinksComponent implements OnInit {
  resume: any;
  resumeDataSubscription: Subscription
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getResumeData()
      .subscribe(data => {
        this.resume = data;
      });
  }

}
