import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UpdateComponent } from './update.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router, ActivatedRoute, NavigationExtras } from '@angular/router';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateComponent],
      imports: [HttpClientModule, FormsModule, RouterTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.TaskId = 6,
      component.task = [{
        TaskId: 1,
        TaskName: "TasksTest 1",
        Priority: 1,
        ParentTaskId: 2,
        StartDate: "2018-11-21",
        EndDate: "2019-01-31",
        IsEnded: true
      }]

  });

  it('update', () => {
    expect(component.Update).toBeDefined();
  });
});
