import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserInfoService } from "src/app/services/user-info.service";
import { GameModes } from "src/app/shared/model/enums/game-modes";
import UserInformations from "src/app/shared/model/interfaces/user-info";

@Component({
  selector: "app-intro-page",
  templateUrl: "./intro-page.component.html",
  styleUrls: ["./intro-page.component.scss"],
})
export class IntroPageComponent {
  constructor(private _userService: UserInfoService, private _router: Router) {}

  public onSubmitForm(userinfo: {
    userinfo: UserInformations;
    colors: GameModes;
  }) {
    this._router.navigate([`/game/${userinfo.colors}`]);
  }
}
