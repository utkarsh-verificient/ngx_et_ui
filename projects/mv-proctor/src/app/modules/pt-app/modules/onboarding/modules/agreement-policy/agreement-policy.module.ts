import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AgreementPolicyComponent } from './agreement-policy.component';
import { AgreementPolicyRoutingModule } from './agreement-policy-routing.module';

@NgModule({
    declarations: [AgreementPolicyComponent],
    imports: [CommonModule, FormsModule, AgreementPolicyRoutingModule, MatTooltipModule],
})
export class AgreementPolicyModule {}
