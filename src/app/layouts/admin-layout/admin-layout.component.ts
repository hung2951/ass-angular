import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.getLocalstorage()
    }
  }
  getLocalstorage(){
    if (!localStorage.getItem('user')) return
    else return JSON.parse(localStorage.getItem('user') as string)
  }

}
