
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatSnackBarModule,MatInputModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';
import { ImageUploadModule } from 'angular2-image-upload';


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
    MatSnackBarModule,
    RouterModule.forChild(accountRoutes),
    ImageUploadModule.forRoot()
  ],
  declarations: [RegisterComponent, LoginComponent, AccountComponent]
})
export class AccountModule { }
