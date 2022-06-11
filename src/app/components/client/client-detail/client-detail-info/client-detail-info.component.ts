import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-detail-info',
  templateUrl: './client-detail-info.component.html',
  styleUrls: ['./client-detail-info.component.css']
})
export class ClientDetailInfoComponent implements OnInit {
  id:string
  constructor(private activateRoute: ActivatedRoute) {
    this.id = ''
   }
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    console.log(this.id);
  }

}
