import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'vt-agreement-policy',
    templateUrl: './agreement-policy.component.html',
    styleUrls: ['./agreement-policy.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgreementPolicyComponent {
    isAccepted = false;

    onAgreementClick() {
        console.log('onAgreementClick');
    }
}
