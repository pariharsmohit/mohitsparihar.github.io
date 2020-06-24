import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { IfStmt } from '@angular/compiler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.scss',
        './app.component.mobile.scss'
    ]
})
export class AppComponent implements OnInit {
    title = 'resume';
    showMenu = false;

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
     
    toggleMenu(event) {
        if(event.target.attributes.id && event.target.attributes.id.value === 'hamburger-icon') {
            this.showMenu = !this.showMenu;
            event.stopPropagation();
            return;
        }
        this.showMenu = false;
    }

}
