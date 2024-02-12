import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgreementPolicyComponent } from './agreement-policy.component';

const routes: Routes = [{ path: '', component: AgreementPolicyComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AgreementPolicyRoutingModule {}
