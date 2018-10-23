import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  TaskId: number;
  item: any;
  list: any;
  constructor(private _router: Router, private _active: ActivatedRoute, private _service: SharedService) { }

  ngOnInit() {

    this.item = new Task();
    this._service.GetAll()
      .subscribe(data => {
        this.list = data, err => console.log(err)
      });

    this._active.params.subscribe(b => {
      this.TaskId = b['taskid']
    });

    this._service.GetByTaskId(this.TaskId)
      .subscribe(data => {
        this.item = data
      });
  }

  Update() {
    this._service.UpdateTask(this.item)
      .subscribe(_ => this._router.navigateByUrl('view'));
  }

  Cancel() {
    this._router.navigate(['view']);
  }
}

