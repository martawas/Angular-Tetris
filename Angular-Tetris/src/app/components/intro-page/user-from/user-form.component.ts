import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserInfoService } from "src/app/services/user-info.service";

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
  @Output() public submitForm = new EventEmitter<UserInfo>();
  public username: string = "";

  public mail: string = "";

  public isPersonInfoInvalid: boolean = false;

  constructor(private _userService: UserInfoService, private _router: Router) {}

  ngOnInit(): void {}

  public cleanWarning() {
    this.isPersonInfoInvalid = false;
  }

  public onSubmit(form: any) {
    console.log(form.mail);
    this.submitForm.emit(form.username);
    this.mail = form.mail;
    if (this.username.length >= 3 && this.mail.includes("@")) {
      this._userService.setUserName(this.username);
      this._router.navigate(["/game"]);
    } else {
      this.isPersonInfoInvalid = true;
    }
  }
}