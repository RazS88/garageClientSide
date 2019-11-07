import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Question } from '../model/question';
import { Review } from '../model/review';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private httpClient: HttpClient) { }

  public addQuestion(question:Question):Observable<any> {
    return this.httpClient.post("http://localhost:8080/api/question",
    question,{withCredentials:true , responseType: 'json'});
  }

  public addReview(review:Review):Observable<any>{
    return this.httpClient.post("http://localhost:8080/api/review",
    review,{withCredentials:true , responseType: 'json'});
  }

  public getReviews():Observable<Review[]>{
    return this.httpClient.get<Review[]>("http://localhost:8080/api/reviews"
    ,{withCredentials:true});

  }

}
