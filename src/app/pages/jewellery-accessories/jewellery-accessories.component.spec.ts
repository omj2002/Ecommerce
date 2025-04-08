import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelleryAccessoriesComponent } from './jewellery-accessories.component';

describe('JewelleryAccessoriesComponent', () => {
  let component: JewelleryAccessoriesComponent;
  let fixture: ComponentFixture<JewelleryAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JewelleryAccessoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JewelleryAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
