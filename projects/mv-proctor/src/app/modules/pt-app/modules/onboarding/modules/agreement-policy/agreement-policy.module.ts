import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AgreementPolicyComponent } from './agreement-policy.component';
import { AgreementPolicyRoutingModule } from './agreement-policy-routing.module';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [AgreementPolicyComponent],
    imports: [CommonModule, FormsModule, AgreementPolicyRoutingModule, MaterialModule],
})
export class AgreementPolicyModule {}
