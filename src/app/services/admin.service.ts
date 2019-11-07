import { Review } from './../model/review';
import { Question } from './../model/question';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private httpClient: HttpClient) { }

  //Question
  public getQuestions():Observable<Question[]>{
    return this.httpClient.get<Question[]>("http://localhost:8080/api/admin/questions"
    ,{withCredentials:true});

  }

  public removeQuestion(id:number):Observable<any>{
    return this.httpClient.delete("http://localhost:8080/api/admin/question" + id
    ,{withCredentials:true,responseType:'text'});
  }

  public removeQuestions():Observable<any>{
    return this.httpClient.delete("http://localhost:8080/api/admin/questions"
   , {withCredentials:true});
  }

  //Review
  public getReviews():Observable<Review[]>{
    return this.httpClient.get<Review[]>("http://localhost:8080/api/admin/reviews"
    ,{withCredentials:true});

  }

  public removeReview(id:number):Observable<any>{
    return this.httpClient.delete("http://localhost:8080/api/admin/review" + id
    ,{withCredentials:true,responseType:'text'});
  }

  public removeReviews():Observable<any>{
    return this.httpClient.delete("http://localhost:8080/api/admin/reviews"
   , {withCredentials:true});
  }
}
