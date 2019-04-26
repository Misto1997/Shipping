import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultuserComponent } from './defaultuser.component';

describe('DefaultuserComponent', () => {
  let component: DefaultuserComponent;
  let fixture: ComponentFixture<DefaultuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
