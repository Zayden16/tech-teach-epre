import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonIcon, IonicModule } from "@ionic/angular";
import { OpenaiService } from "src/app/services/openai.service";
import { Message, MessageSender } from "src/model";
import { Guid } from "guid-typescript";
import { addIcons } from "ionicons";
import { sendOutline } from "ionicons/icons";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ChatPage {
  messages: Message[] = [];

  constructor(private openAiService: OpenaiService) {
    addIcons({
      sendOutline,
    });
  }

  getStringValue(value: any): string {
    return String(value);
  }

  sendMessage(inputMessage: string) {
    let newUserMessage: Message = {
      id: Guid.create().toString(),
      sender: MessageSender.User,
      text: inputMessage,
      timestamp: new Date(),
    };
    this.messages.push(newUserMessage);
  }
}
