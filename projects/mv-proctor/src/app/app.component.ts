import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vt-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'mv-proctor';
}
