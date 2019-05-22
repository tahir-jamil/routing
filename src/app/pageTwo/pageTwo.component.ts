import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-pageTwo',
  templateUrl: './pageTwo.component.html',
  styleUrls: ['./pageTwo.component.css'],
  moduleId: module.id
})
export class PageTwoComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

  
  back() {
     this.routerExtensions.back();
  }

}
