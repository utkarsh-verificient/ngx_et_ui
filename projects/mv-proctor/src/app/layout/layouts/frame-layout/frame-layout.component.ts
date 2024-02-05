import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'vt-frame-layout',
    templateUrl: './frame-layout.component.html',
    styleUrls: ['./frame-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameLayoutComponent {}
