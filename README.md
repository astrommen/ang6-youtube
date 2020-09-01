# Ang6Youtube

 This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

<br>

## Practicing Angular 10

  DesignCourse [Learn Angular 6 in 60 Minutes - Free Beginners Crash Course](https://www.youtube.com/watch?v=z4JUm0Bq9AM)

## How to Use
  - There are 2 pages a visitor can select: users page and posts page.

    - When the visitor selects the users page, a list of users and some information is shown.
      - The visitor can see additional information when selecting a single user.
    - When the visitor selects the posts page, a list of posts is shown.


---------------------------------
---------------------------------
<br>

## Encountered the Following Issues

- Class Binding for page indicator styling
  - code for Ang6 in sidebar component:

        import { Component, OnInit } from '@angular/core';
        import { Router, NavigationEnd } from '@angular/router';

        export class SidebarComponent implements OnInit {

          currentUrl: string;

          constructor(private router: Router) {
            router.events.subscribe(
              (_: NavigationEnd) => this.currentUrl = _.url);
          }

          ngOnInit() {}

        }

  - code for Ang10 from sidebar component:
          
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

            this.router.events.pipe(
              filter(event => event instanceof NavigationEnd))
              .subscribe(event => {
              // casting event before accessing url from https://github.com/angular/angular/issues/15439
              this.currentUrl = (event as NavigationEnd).url;
            })
          }
          
          ngOnInit() {}
        }
