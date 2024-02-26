import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceScanComponent } from './face-scan.component';

describe('FaceScanComponent', () => {
  let component: FaceScanComponent;
  let fixture: ComponentFixture<FaceScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaceScanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaceScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
