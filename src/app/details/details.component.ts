import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  user$: Object;

  constructor(private route: ActivatedRoute, private data: DataService ) {
    this.route.params.subscribe( params => this.user$ = params.id)
   }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      //enclosed in brackets for testing
      (data:any) => {this.user$ = data
        // console.log(this.user$.name);
      }
    );
  }
}

//had to declare property types to get rid of error TS2339
interface Object {
  name: string;
  username: string;
  email: string;
  phone: string;
}