import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OpenaiService {
  private openaiKey = "";
  constructor() {}

  setApiKey(key: string) {
    this.openaiKey = key;
  }
}
