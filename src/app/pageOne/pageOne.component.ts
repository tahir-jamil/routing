import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router/router.module';

@Component({
  selector: 'ns-pageOne',
  templateUrl: './pageOne.component.html',
  styleUrls: ['./pageOne.component.css'],
  moduleId: module.id
})
export class PageOneComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

  
  back() {
     this.routerExtensions.back();
  }

}
