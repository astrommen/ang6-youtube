import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
    console.log(router.url);

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      // casting event before accessing url from https://github.com/angular/angular/issues/15439
      this.currentUrl = (event as NavigationEnd).url;
    })
    
  }
  
  ngOnInit() {
  }
}
  
  

