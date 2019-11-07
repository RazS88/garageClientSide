import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { fadeAnimation, myAnimation } from './Animation';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [
   myAnimation
  ]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 

}
