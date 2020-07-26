import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InstanceTestingComponent } from './first-look/instance-testing/instance-testing.component';
import { SomeComponent } from './first-look/dependencies-testing/components/some/some.component';
import { LoginWidgetComponent } from './test-bed/components/login-widget/login-widget.component';
import { LoginWidgetWithServiceComponent } from './test-bed/components/login-widget-with-service/login-widget-with-service.component';
import { PublicationCardComponent } from './test-bed/components/publication-card/publication-card.component';
import { UserProfileComponent } from './test-bed/components/user-profile/user-profile.component';
import { UserPictureComponent } from './test-bed/components/user-profile/user-picture/user-picture.component';
import { UserInfoComponent } from './test-bed/components/user-profile/user-info/user-info.component';
import { UserMenuComponent } from './test-bed/components/user-profile/user-menu/user-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    InstanceTestingComponent,
    SomeComponent,
    LoginWidgetComponent,
    LoginWidgetWithServiceComponent,
    PublicationCardComponent,
    UserProfileComponent,
    UserPictureComponent,
    UserInfoComponent,
    UserMenuComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
