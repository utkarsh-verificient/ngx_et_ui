import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'agreement' },
  {
    path: '',
    component: OnboardingComponent,
    children: [
      {
        path: 'agreement',
        loadChildren: () =>
          import('./modules').then((m) => m.AgreementPolicyModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingRoutingModule {}
