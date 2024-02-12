import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtBrowserComponent } from './pt-browser.component';

describe('PtBrowserComponent', () => {
  let component: PtBrowserComponent;
  let fixture: ComponentFixture<PtBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PtBrowserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PtBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
