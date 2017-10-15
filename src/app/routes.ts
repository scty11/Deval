import { Routes } from '@angular/router';

export const appRoutes: Routes = [

  { path: '', redirectTo: '/account', pathMatch: 'full' },
  { path: 'account', loadChildren: 'app/components/account/account.module#AccountModule' }
];
