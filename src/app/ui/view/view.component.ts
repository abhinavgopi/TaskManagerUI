import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { SharedService } from 'src/app/services/shared.service';
// import { UpdateComponent } from 'src/app/ui/update/update.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  retrieveData: any;
  list: any;
  listfilter: any;
  item: Task;
  TaskId: number;
  tskName: string;
  parentTask: number;
  priorityFrom: number;
  priorityTo: number;
  sDate: Date;
  eDate: Date;

  constructor(private _service: SharedService, private _router: Router) {    
    this._service.GetAll().subscribe(data => {
      this.list = data
      console.log(data)
      this.listfilter = data
        , err => console.log(err)
    });
  }

  ngOnInit() {    
  }

  EndTask(tId: number) {
    this._service.EndTask(tId)
      .subscribe(_ => this._service.GetAll()
        .subscribe(result => {
          this.list = result
          this.listfilter = result
            , error => console.log(error)
        }, err => console.log(err)));    
  }

  Disable(endTask: boolean) {
    if (endTask) { return true; }
    else { return false; }
  }

  SearchByTask() {
    this.listfilter = this.list.filter(i => i.TaskName.startsWith(this.tskName));
  }

  SearchByParentTask() {
    this.listfilter = this.list.filter(a => a.ParentTaskId.toString().includes(this.parentTask));
  }

  SearchByPriorityFrom() {
    this.listfilter = this.list.filter(x => x.Priority > (this.priorityFrom));
  }
  SearchByPriorityTo() {
    this.listfilter = this.list.filter(y => y.Priority < (this.priorityTo));
  }

  SearchByStartDate() {
    this.listfilter = this.list.filter(k => k.StartDate.toString().includes(this.sDate.toString()));
  }

  SearchByEndDate() {
    this.listfilter = this.list.filter(i => i.EndDate.toString().includes(this.eDate.toString()));
  }
}
