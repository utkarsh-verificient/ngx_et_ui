import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'onboarding' },
    {
        path: 'onboarding',
        loadChildren: () => import('./modules').then((m) => m.OnboardingModule),
        data: {
            theme: ['theme-proctortrack'],
            layout: 'pt-layout',
        },
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PtAppRoutingModule { }
