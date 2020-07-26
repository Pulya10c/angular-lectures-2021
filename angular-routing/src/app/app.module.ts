import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { SimpleRedicrectComponent } from './pages/simple-redicrect/simple-redicrect.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { LeftTabComponent } from './pages/tabs/pages/left-tab/left-tab.component';
import { RightTabComponent } from './pages/tabs/pages/right-tab/right-tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserPageComponent,
    AdminPageComponent,
    SimpleRedicrectComponent,
    NotFoundComponent,
    TabsComponent,
    LeftTabComponent,
    RightTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
