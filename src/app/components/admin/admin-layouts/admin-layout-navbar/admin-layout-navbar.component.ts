import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout-navbar',
  templateUrl: './admin-layout-navbar.component.html',
  styleUrls: ['./admin-layout-navbar.component.css']
})
export class AdminLayoutNavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('user')
    this.router.navigateByUrl('signin')
  }
}
