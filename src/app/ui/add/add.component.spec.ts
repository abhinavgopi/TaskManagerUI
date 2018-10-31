import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddComponent } from './add.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Task } from 'src/app/models/task';
import { from } from 'rxjs/internal/observable/from';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddComponent],
      imports: [FormsModule, HttpModule, RouterTestingModule],
      providers: [FormsModule, HttpModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
