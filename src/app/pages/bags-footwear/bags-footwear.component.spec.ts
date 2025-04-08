import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsFootwearComponent } from './bags-footwear.component';

describe('BagsFootwearComponent', () => {
  let component: BagsFootwearComponent;
  let fixture: ComponentFixture<BagsFootwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BagsFootwearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagsFootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
