import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewComponent } from './view.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProviderAst } from '@angular/compiler';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewComponent],
      imports: [HttpModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
