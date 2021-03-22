import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperDisComponent } from './paper-dis.component';

describe('PaperDisComponent', () => {
  let component: PaperDisComponent;
  let fixture: ComponentFixture<PaperDisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperDisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
