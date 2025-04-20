import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickIncrementerComponent } from './click-incrementer.component';

describe('ClickIncrementerComponent', () => {
  let component: ClickIncrementerComponent;
  let fixture: ComponentFixture<ClickIncrementerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickIncrementerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickIncrementerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
