import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtLayoutComponent } from './pt-layout.component';

describe('PtLayoutComponent', () => {
    let component: PtLayoutComponent;
    let fixture: ComponentFixture<PtLayoutComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PtLayoutComponent],
        });
        fixture = TestBed.createComponent(PtLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
