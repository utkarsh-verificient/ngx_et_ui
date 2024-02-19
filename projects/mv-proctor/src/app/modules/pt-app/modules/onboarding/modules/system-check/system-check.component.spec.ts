import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCheckComponent } from './system-check.component';

describe('SystemCheckComponent', () => {
  let component: SystemCheckComponent;
  let fixture: ComponentFixture<SystemCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SystemCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SystemCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
