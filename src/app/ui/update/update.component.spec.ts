import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UpdateComponent } from './update.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateComponent],
      imports: [FormsModule, HttpModule, RouterTestingModule],
      providers: [HttpModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('update', () => {
  //   expect(component).toBeTruthy();
  // });
});
