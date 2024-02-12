import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserLayoutComponent } from './browser-layout.component';

describe('BrowserLayoutComponent', () => {
  let component: BrowserLayoutComponent;
  let fixture: ComponentFixture<BrowserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowserLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
