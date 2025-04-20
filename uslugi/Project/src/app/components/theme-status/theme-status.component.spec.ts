import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeStatusComponent } from './theme-status.component';

describe('ThemeStatusComponent', () => {
  let component: ThemeStatusComponent;
  let fixture: ComponentFixture<ThemeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
