import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'pt' },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'pt',
                loadChildren: () => import('./modules').then((m) => m.PtAppModule),
            },
            {
                path: 'br',
                loadChildren: () => import('./modules').then((m) => m.PtBrowserModule),
            },
        ],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
