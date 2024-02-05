import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaLayoutComponent } from './ta-layout.component';

describe('TaLayoutComponent', () => {
    let component: TaLayoutComponent;
    let fixture: ComponentFixture<TaLayoutComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TaLayoutComponent],
        });
        fixture = TestBed.createComponent(TaLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
