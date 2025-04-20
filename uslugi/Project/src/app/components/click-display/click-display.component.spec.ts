import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickDisplayComponent } from './click-display.component';

describe('ClickDisplayComponent', () => {
  let component: ClickDisplayComponent;
  let fixture: ComponentFixture<ClickDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
