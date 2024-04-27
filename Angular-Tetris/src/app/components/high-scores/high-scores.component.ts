import { Component, OnInit } from "@angular/core";
import { map } from "rxjs";
import { TetrisApiService } from "src/app/api/tetris-api.service";
import { GetScoresRequest } from "src/app/shared/model/dto/get-scores-request";
import { BaseComponent } from "../base-component";
import { Router } from "@angular/router";

@Component({
  selector: "app-high-scores",
  templateUrl: "./high-scores.component.html",
  styleUrls: ["./high-scores.component.scss"],
})
export class HighScoresComponent extends BaseComponent implements OnInit {
  public highScores!: GetScoresRequest[];
  constructor(
    private tetrisApiService: TetrisApiService,
    private _router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.tetrisApiService
        .getScores()
        .pipe(
          map((data: any) => {
            this.highScores = data
              .sort((a: any, b: any) => b.score - a.score)
              .slice(0, 10);
          })
        )
        .subscribe()
    );
  }
  back() {
    this._router.navigate(["./game"]);
  }
}
