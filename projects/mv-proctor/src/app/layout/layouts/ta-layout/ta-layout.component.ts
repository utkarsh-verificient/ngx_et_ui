import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'vt-ta-layout',
    templateUrl: './ta-layout.component.html',
    styleUrls: ['./ta-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutComponent {}
