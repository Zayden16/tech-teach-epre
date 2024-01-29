import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OpenaiService } from 'src/app/services/openai.service';
import { Message, MessageSender } from 'src/model';
import { Guid } from 'guid-typescript';
import { addIcons } from 'ionicons';
import { closeOutline, sendOutline } from 'ionicons/icons';
import {
  IonAvatar,
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  PopoverController,
  IonButtons,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonFooter,
    IonInput,
    IonButton,
    IonIcon,
  ],
})
export class ChatPage implements OnInit {
  @Input() context: string | undefined;
  inputMessageText: string = '';
  messages: Message[] = [];

  constructor(
    private openAiService: OpenaiService,
    private popoverController: PopoverController
  ) {
    addIcons({
      sendOutline,
      closeOutline,
    });
  }
  ngOnInit(): void {
    const defaultMessage: Message = {
      id: Guid.create().toString(),
      sender: MessageSender.Bot,
      text: 'Hi there, how can I help you?',
      timestamp: new Date(),
    };
    this.messages.push(defaultMessage);
  }

  getStringValue(value: any): string {
    return String(value);
  }

  sendMessage(inputMessage: string) {
    if (this.inputMessageText === '') {
      return;
    }
    let newUserMessage: Message = {
      id: Guid.create().toString(),
      sender: MessageSender.User,
      text: inputMessage,
      timestamp: new Date(),
    };
    this.messages.push(newUserMessage);

    this.openAiService
      .getChatResponse(inputMessage, this.context)
      .then((response) => {
        let botMessage: Message = {
          id: Guid.create().toString(),
          sender: MessageSender.Bot,
          text: response,
          timestamp: new Date(),
        };
        this.messages.push(botMessage);
      });
    this.inputMessageText = '';
  }

  closePopover() {
    this.popoverController.dismiss();
  }
}
