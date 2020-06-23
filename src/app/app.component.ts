import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.scss',
        './_responsive.scss'
    ]
})
export class AppComponent implements OnInit {
    title = 'resume';

    constructor(private httpService: HttpService) { }

    ngOnInit(): void {
        this.httpService.getResume()
    }

    scrollHandler() {
        let elements = document.querySelectorAll('.content-wrapper');
        elements.forEach(element => {
            let boundary = element.getBoundingClientRect();
            if ((boundary.top < (getViewportHeight() - 50) && boundary.top > 0)
                || (boundary.top < 0 && boundary.bottom >= getViewportHeight())) {
                document.getElementById('nav-' + element.getAttribute('id')).classList.add('selected');
            } else {
                document.getElementById('nav-' + element.getAttribute('id')).classList.remove('selected');
            }
        });

        function getViewportHeight(): number {
            return (window.innerHeight || document.documentElement.clientHeight);
        }
    }
    hamburgerMenu() {
        const homeBtn = document.getElementById('home-btn');
        let links = document.getElementById("myLinks");
        if (links.style.display === "block") {
          links.style.display = "none";
        } else {
          links.style.display = "block";
        }
      }

}
