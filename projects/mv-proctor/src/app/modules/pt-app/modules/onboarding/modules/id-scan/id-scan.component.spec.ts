import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdScanComponent } from './id-scan.component';

describe('IdScanComponent', () => {
  let component: IdScanComponent;
  let fixture: ComponentFixture<IdScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdScanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
