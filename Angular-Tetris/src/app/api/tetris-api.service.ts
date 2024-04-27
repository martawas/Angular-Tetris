import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class TetrisApiService {
  constructor(private http: HttpClient) {}

  public getScores() {
    const options = {
      headers: new HttpHeaders({
        Accept: "application/json",
      }),
    };
    return this.http.get(`${environment.gameUrl}tetris`, options);
  }
}
