import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtAppComponent } from './pt-app.component';

describe('PtAppComponent', () => {
  let component: PtAppComponent;
  let fixture: ComponentFixture<PtAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PtAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PtAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
