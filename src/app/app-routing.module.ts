import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {UsersComponent} from './pages/users/users.component';
import {WalletComponent} from './pages/wallet/wallet.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'users', component: UsersComponent },
    { path: 'wallet', component: WalletComponent },
    { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
