import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoggerComponent } from './user-logger.component';

describe('UserLoggerComponent', () => {
  let component: UserLoggerComponent;
  let fixture: ComponentFixture<UserLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLoggerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
