
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { UserService } from 'src/app/services/user.service';
import { Review } from 'src/app/model/Review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  public review =new Review;

  public reviews: Review[];

  constructor(private title:Title,private userService:UserService) { }

  ngOnInit() {
    this.title.setTitle("מה חשבתם עלינו...");
    this.getAllReviews();

  }
  public sendreview(){
  this.userService.addReview(this.review)
  .subscribe(()=> this.getAllReviews())
  , err => alert(err.message);
  }

  public getAllReviews():void{
    this.userService.getReviews()
    .subscribe(reviews=> this.reviews =reviews)
    ,err=>alert(err.message);
  }
}
