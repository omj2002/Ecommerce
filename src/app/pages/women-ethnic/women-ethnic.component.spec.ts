import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenEthnicComponent } from './women-ethnic.component';

describe('WomenEthnicComponent', () => {
  let component: WomenEthnicComponent;
  let fixture: ComponentFixture<WomenEthnicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenEthnicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenEthnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
