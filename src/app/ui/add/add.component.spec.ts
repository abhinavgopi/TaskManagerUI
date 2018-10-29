import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddComponent } from './add.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddComponent],
      imports: [HttpClientModule, FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    component.list = [{
      TaskId: 17,
      TaskName: "Task17",
      Priority: 21,
      ParentTaskId: 5,
      StartDate: "2018-10-21",
      EndDate: "2018-12-31",
      IsEnded: true
    }]

    fixture.detectChanges();
  });

  it('should reset values', () => {
    component.item = [{
      TaskId: 17,
      TaskName: "Task17",
      Priority: 21,
      ParentTaskId: 5,
      StartDate: "2018-10-21",
      EndDate: "2018-12-31",
      IsEnded: true
    }];
    component.reset();
    expect(component.item).toEqual({});
  });

  it('should add test', () => {
    component.addTask();
    expect(component.item).toEqual({});
  });
});
