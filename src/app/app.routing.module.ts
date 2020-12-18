import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './Home/home.component';
import { RegistrationComponent } from './Registration/registration.component';
import { UserProfileComponent } from './UserProfile/userprofile.component';

@NgModule({
  declarations: [ 
    HomePageComponent
    , RegistrationComponent
    , UserProfileComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'home-page', component: HomePageComponent },
      // { path: 'registration-page', component: RegistrationComponent },
      { path: 'userprofile-page', component: UserProfileComponent },
      { path: '**', redirectTo: 'home-page' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}
