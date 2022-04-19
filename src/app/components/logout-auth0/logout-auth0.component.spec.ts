import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutAuth0Component } from './logout-auth0.component';

describe('LogoutAuth0Component', () => {
  let component: LogoutAuth0Component;
  let fixture: ComponentFixture<LogoutAuth0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutAuth0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutAuth0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
