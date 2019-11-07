import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

   public question = new Question;

  constructor(private title:Title,private userService:UserService) { }

  ngOnInit() {
    this.title.setTitle('צור קשר');
  }
  public sendQuestion(){
    this.userService.addQuestion(this.question)
    .subscribe(()=> alert("question send to distention"))
    , err => alert(err.message);
    }
  }

