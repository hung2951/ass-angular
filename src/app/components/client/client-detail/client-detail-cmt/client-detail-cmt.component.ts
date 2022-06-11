import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-detail-cmt',
  templateUrl: './client-detail-cmt.component.html',
  styleUrls: ['./client-detail-cmt.component.css']
})
export class ClientDetailCmtComponent implements OnInit {
  id:string
  constructor(private activateRoute: ActivatedRoute) {
    this.id = ''
   }
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    console.log(this.id);
  }

}
