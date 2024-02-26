import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomScanComponent } from './room-scan.component';

describe('RoomScanComponent', () => {
  let component: RoomScanComponent;
  let fixture: ComponentFixture<RoomScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomScanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
