import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroPageComponent } from './components/intro-page/intro-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { FormsModule } from '@angular/forms';
import { TetrisCoreModule } from 'ngx-tetris';
import { SortPipe } from './shared/model/pipes/sort.pipe';
import { FilterPipe } from './shared/model/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    GamePageComponent,
    SortPipe,
    FilterPipe,
  ],
  imports: [BrowserModule, FormsModule, TetrisCoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
