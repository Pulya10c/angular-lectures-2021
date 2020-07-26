import { IsDonePurePipe } from './components/pipes-examples/pipes/is-done-pure.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { HighlightDirective } from './components/attribute-directives/directives/highlight.directive';
import { HighlightOnHoverDirective } from './components/attribute-directives/directives/highlight-on-hover.directive';
import { HighlightWithCustomColorDirective } from './components/attribute-directives/directives/highlight-with-custom-color.directive';
import { FormsModule } from '@angular/forms';
import {
  HighlightCustomColorBindingDirective
} from './components/attribute-directives/directives/highlight-custom-color-binding.directive';
import {
  ElementWithPropsToOverrideComponent
} from './components/attribute-directives/components/element-with-props-to-override/element-with-props-to-override.component';
import { PipesExamplesComponent } from './components/pipes-examples/pipes-examples.component';
import { UnlessDirective } from './components/structural-directives/directives/unless.directive';
import { PleasePipe } from './components/pipes-examples/pipes/please.pipe';
import { AsyncPipeComponent } from './components/pipes-examples/components/async-pipe/async-pipe.component';
import { TasksExampleComponent } from './components/pipes-examples/components/tasks-example/tasks-example.component';
import { PureVsImpureComponent } from './components/pipes-examples/components/pure-vs-impure/pure-vs-impure.component';
import { StatusPipe } from './components/pipes-examples/pipes/status.pipe';
import { IsDoneImpurePipe } from './components/pipes-examples/pipes/is-done-impure.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    HighlightDirective,
    HighlightOnHoverDirective,
    HighlightWithCustomColorDirective,
    HighlightCustomColorBindingDirective,
    ElementWithPropsToOverrideComponent,
    PipesExamplesComponent,
    AsyncPipeComponent,
    TasksExampleComponent,
    PureVsImpureComponent,
    UnlessDirective,
    PleasePipe,
    StatusPipe,
    IsDonePurePipe,
    IsDoneImpurePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
