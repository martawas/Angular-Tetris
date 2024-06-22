import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { GameModes } from "src/app/shared/model/enums/game-modes";
import UserInformations from "src/app/shared/model/interfaces/user-info";
import { Validators, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent {
  @Output() public submitForm = new EventEmitter<{
    userinfo: UserInformations;
    colors: GameModes;
  }>();

  @Output() setUserInfo = new EventEmitter<UserInformations>();
  public gameModes = GameModes;
  public username!: string;
  public userToken!: string;
  public userMail!: string;

  public introForm = new FormGroup({
    name: new FormControl(this.username, [
      Validators.required,
      Validators.minLength(5),
    ]),
    token: new FormControl(this.userToken, [
      Validators.required,
      Validators.minLength(5),
    ]),
    mail: new FormControl(this.userMail, [
      Validators.required,
      Validators.email,
    ]),
  });

  public onSubmit(mode: GameModes) {
    if (this.introForm.valid) {
      this.submitForm.emit({
        userinfo: {
          username: this.introForm.controls["name"].value!,
          token: this.introForm.controls["token"].value!,
          mail: this.introForm.controls["mail"].value!,
        },
        colors: mode,
      });
    }
  }

  public onInputBlur() {
    if (this.introForm.valid) {
      this.setUserInfo.emit({
        username: this.introForm.controls["name"].value!,
        token: this.introForm.controls["token"].value!,
        mail: this.introForm.controls["mail"].value!,
      });
    }
  }
}
