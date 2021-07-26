import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  QuestionComponent,
  NotificationComponent,
  ScoreComponent,
  CardComponent,
  CardRowComponent,
  ProgressBarComponent,
} from './components';

const Components = [
  AppComponent,
  QuestionComponent,
  NotificationComponent,
  ScoreComponent,
  CardComponent,
  CardRowComponent,
  ProgressBarComponent,
];

@NgModule({
  bootstrap: Components,
  declarations: Components,
  imports: [BrowserModule, NgbModule, FontAwesomeModule],
})
export class AppModule {}
