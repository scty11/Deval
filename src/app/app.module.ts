import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthService } from './services/auth.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
// tslint:disable-next-line:max-line-length
import { MatCardModule, MatSnackBarModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatSidenavModule } from '@angular/material';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ImageUploadModule } from 'angular2-image-upload';
import { ProfileService } from './services/profile.service';
import { ProfileGuard } from './guards/profile.guard';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavBarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    ImageUploadModule.forRoot(),
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [AuthService, AuthGuard, ProfileService, ProfileGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
