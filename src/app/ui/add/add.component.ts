import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  item: any;
  list: any;
  PId: number;
  constructor(private _service: SharedService, private _route: Router) {
    this.item = new Task();
    this._service.GetAll().subscribe(data => {
      this.list = data,
        err => console.log(err)
    });
  }

  ngOnInit() {
  }
  Add() {
    this._service.AddTask(this.item)
      .subscribe(_ => this._route.navigateByUrl('view'), err => console.log(err));
  }

  Reset() {
    this.item = new Task();
  }
}
