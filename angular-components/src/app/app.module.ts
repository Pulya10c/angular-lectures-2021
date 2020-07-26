import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { BindingsExampleComponent } from './components/bindings-example/bindings-example.component';
import { TemplateSyntaxComponent } from './components/template-syntax/template-syntax.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { FeedSimpleComponent } from './components/feed-simple/feed-simple.component';
import { FeedDecompositionComponent } from './components/feed-decomposition/feed-decomposition.component';
import { PostComponent } from './components/feed-decomposition/post/post.component';
import { InnerComponent } from './components/template-syntax/inner/inner.component';
import { ContentExampleComponent } from './components/content-example/content-example.component';
import { ContentInnerComponent } from './components/content-example/content-inner/content-inner.component';
import { InnerLifecycleComponent } from './components/lifecycle-hooks/inner/inner.component';


@NgModule({
  declarations: [
    AppComponent,
    BindingsExampleComponent,
    TemplateSyntaxComponent,
    LifecycleHooksComponent,
    FeedSimpleComponent,
    FeedDecompositionComponent,
    PostComponent,
    InnerComponent,
    ContentExampleComponent,
    ContentInnerComponent,
    InnerLifecycleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
