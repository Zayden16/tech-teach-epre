import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { OpenaiService } from "src/app/services/openai.service";
import { Message, MessageSender } from "src/model";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ChatPage {
  messages: Message[] = [];

  constructor(private openaiService: OpenaiService) {}

  sendMessage(inputMessage: string) {
    let newUserMessage: Message = {
      id: "1",
      sender: MessageSender.User,
      content: inputMessage,
      timestamp: new Date(),
    };
    this.messages.push(newUserMessage);
  }
}
