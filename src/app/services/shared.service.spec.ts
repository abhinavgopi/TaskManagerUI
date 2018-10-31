import { TestBed } from '@angular/core/testing';
import { SharedService } from './shared.service';
import { Task } from 'src/app/models/task';
import { inject } from '@angular/core';
import { Response, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

describe('SharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpModule, HttpClientModule],
    providers: [SharedService, HttpModule, HttpClientModule],

  }));


  it('Add new record', () => {
    const service: SharedService = TestBed.get(SharedService);
    const item: Task = { TaskId: 389, TaskName: "Task135", ParentTaskId: 3, Priority: 14, StartDate: new Date("2/12/2018"), EndDate: new Date("5/12/2018"), IsEnded: false }
    const response = service.AddTask(item).subscribe(
      a => { expect(a.TaskName).toEqual("Task35"); });
  });

  it('Delete record', () => {
    const TaskId = 1;
    const service: SharedService = TestBed.get(SharedService);
    service.EndTask(TaskId);
    expect(service).toBeTruthy();
  });

  it('Get all record', () => {
    const service: SharedService = TestBed.get(SharedService);
    service.GetAll();
    expect(service).toBeTruthy();
  });

  it('Delete record', () => {
    const item: Task = { TaskId: 389, TaskName: "Task135 changed", ParentTaskId: 3, Priority: 14, StartDate: new Date("2/12/2018"), EndDate: new Date("5/12/2018"), IsEnded: false }
    const service: SharedService = TestBed.get(SharedService);
    service.UpdateTask(item).subscribe(a => {
        expect(a.length).toEqual(3);
      });
  });

  it('should be created', () => {
    const service: SharedService = TestBed.get(SharedService);
    expect(service).toBeTruthy();
  });
});
