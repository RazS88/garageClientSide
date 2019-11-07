import { Question } from './../../model/Question';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Title } from '@angular/platform-browser';
import { Review } from 'src/app/model/Review';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public reviews:Review[];

  public questions:Question[];

  public review:Review;

  public question:Question;

  constructor(private adminService:AdminService,private title:Title) { }

  ngOnInit() {
   this.title.setTitle("ZvikaSuperVaisior");
   this.getAllQuestion();
   this.getAllReviews();
  }

  public removeQuestion(id:number):void{
    this.adminService.removeQuestion(id)
    .subscribe( ()=>
      alert("question remove sucss!!") ,
      error =>
      alert(error.message));
   }

   public removeQuestions():void{
    this.adminService.removeQuestions()
    .subscribe( ()=>
      alert("questions remove sucss!!") ,
      error =>
      alert(error.message));
   }

   public removeReview(id:number):void{
    this.adminService.removeReview(id)
    .subscribe( ()=>
      alert("review remove sucss!!") ,
      error =>
      alert(error.message));
   }


   public removeReviews():void{
    this.adminService.removeReviews()
    .subscribe( ()=>
      alert("review remove sucss!!") ,
      error =>
      alert(error.message));
   }



   public getAllReviews():void{
    this.adminService.getReviews()
    .subscribe(reviews=> this.reviews =reviews)
    ,err=>alert(err.message);
   }

   public getAllQuestion():void{
    this.adminService.getQuestions()
    .subscribe(questions=> this.questions = questions)
    ,err=>alert(err.message);
   }
}
