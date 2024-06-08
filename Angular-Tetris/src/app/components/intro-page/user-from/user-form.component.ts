import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { UserInfoService } from "src/app/services/user-info.service";
import { GameModes } from "src/app/shared/model/enums/game-modes";
import UserInformations from "src/app/shared/model/interfaces/user-info";
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup,
} from "@angular/forms";

interface UserInfo {
  name: string;
  mail: string;
}
@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  @Output() public submitForm = new EventEmitter<{
    userinfo: UserInformations;
    colors: GameModes;
  }>();

  @Output() setUserInfo = new EventEmitter<UserInformations>();
  public gameModes = GameModes;
  public username: string = "";
  public mail: string = "";
  public color: GameModes = GameModes.Normal;

  public isPersonInfoInvalid: boolean = false;

  public introForm = new FormGroup({
    name: new FormControl(this.username, [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(private _userService: UserInfoService, private _router: Router) {}

  ngOnInit(): void {}

  public cleanWarning() {
    this.isPersonInfoInvalid = false;
  }

  public onSetContrast(contrast: GameModes) {
    this.color = contrast;
  }

  public onSubmit(mode: UserInformations) {
    this.submitForm.emit({
      userinfo: {
        username: mode.username,
        mail: mode.mail,
      },
      colors: this.color,
    });
  }
}
