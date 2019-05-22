import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  moduleId: module.id
})
export class DashboardComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }
  
  pageOne() {
     this.routerExtensions.navigate(['/pageOne'], {
         transition: {
         name: 'fade',
         curve: 'linear'
         }
     });
  }

  pageTwo() {
     this.routerExtensions.navigate(['/pageTwo'], {
         transition: {
         name: 'fade',
         curve: 'linear'
         }
     });
  }

}
