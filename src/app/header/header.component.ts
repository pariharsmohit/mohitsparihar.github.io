import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpService } from '../http.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  resume: any;
  resumeDataSubscription: Subscription;
  constructor(private httpService: HttpService) { }
  
  ngOnInit(): void {
    this.httpService.getResumeData()
      .subscribe(data => {
        this.resume = data;
      });
  }

  ngOnDestroy() {
  }

}
