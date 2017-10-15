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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
