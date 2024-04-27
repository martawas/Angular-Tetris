import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { IntroPageComponent } from "./components/intro-page/intro-page.component";
import { GamePageComponent } from "./components/game-page/game-page.component";
import { FormsModule } from "@angular/forms";
import { TetrisCoreModule } from "ngx-tetris";
import { SortPipe } from "./shared/model/pipes/sort.pipe";
import { FilterPipe } from "./shared/model/pipes/filter.pipe";
import { RouterModule } from "@angular/router";
import { UserFormComponent } from "./components/intro-page/user-from/user-form.component";
import { TetrisApiService } from "./api/tetris-api.service";
import { HighScoresComponent } from "./components/high-scores/high-scores.component";
import { HighScoresTableComponent } from "./components/high-scores/high-scores-table/high-scores-table.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    GamePageComponent,
    SortPipe,
    FilterPipe,
    UserFormComponent,
    HighScoresComponent,
    HighScoresTableComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    TetrisCoreModule,
    RouterModule.forRoot([
      { path: "intro", component: IntroPageComponent },
      { path: "game", component: GamePageComponent },
      { path: "scores", component: HighScoresComponent },
      { path: "**", redirectTo: "intro" },
    ]),
  ],
  providers: [TetrisApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
