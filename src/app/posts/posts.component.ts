import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Object;

  constructor(private data: DataService) { }

  // on component initialization
  ngOnInit() {
    // calls method from data.service
    this.data.getPosts().subscribe(
      // sets data as response from function getPosts()
      data => this.posts$ = data
    );
  }

}
