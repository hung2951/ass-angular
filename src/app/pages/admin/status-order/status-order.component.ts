import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-status-order',
  templateUrl: './status-order.component.html',
  styleUrls: ['./status-order.component.css']
})
export class StatusOrderComponent implements OnInit {
  formOrder:FormGroup
  constructor() {
    this.formOrder = new FormGroup({
      status: new FormControl('')
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    this.formOrder.get('status')?.valueChanges.subscribe(status=>{
      console.log(status);

    })

  }
}
