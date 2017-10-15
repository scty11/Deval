
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatInputModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';


const accountRoutes: Routes = [
  { path: '', component: AccountComponent }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    RouterModule.forChild(accountRoutes)
  ],
  declarations: [RegisterComponent, LoginComponent, AccountComponent]
})
export class AccountModule { }
