import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'vt-empty-layout',
    templateUrl: './empty-layout.component.html',
    styleUrls: ['./empty-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyLayoutComponent {}
