import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public imageSorce:string;

  @Input("width")
  public imageWidth = 50;


  @Input("height")
  public imageHeight:number = 100;
  }





