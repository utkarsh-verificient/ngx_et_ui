import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementPolicyComponent } from './agreement-policy.component';

describe('AgreementPolicyComponent', () => {
    let component: AgreementPolicyComponent;
    let fixture: ComponentFixture<AgreementPolicyComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AgreementPolicyComponent],
        });
        fixture = TestBed.createComponent(AgreementPolicyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
