import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';
import OpenAI from 'openai';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  private openaiKey = 'ENTER YOUR KEY HERE';
  private openai: OpenAI;

  constructor(private toastController: ToastController) {
    this.openai = new OpenAI({
      apiKey: this.openaiKey,
      dangerouslyAllowBrowser: true,
    });
  }

  async getChatResponse(message: string, context?: string): Promise<string> {
    try {
      const initialPrompt =
        'You are a chatbot inside of our tech teach app. We help teachers get competent in technology. You will receive context from the user and respond to them respectfully and informatively. /n';
      const contextPrompt =
        'This is the content the user currently sees: ' + context;
      const input = initialPrompt + contextPrompt + 'user input:' + message;
      const chatCompletion = await this.openai.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: input,
          },
        ],
        model: 'gpt-3.5-turbo',
      });
      console.log(input);
      const botMessage = chatCompletion.choices[0]?.message?.content;
      return botMessage || "Sorry, I couldn't process your request.";
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      return "Sorry, I couldn't process your request.";
    }
  }

  async getTextToSpeech(text: string): Promise<Blob> {
    try {
      const toast = await this.toastController.create({
        message: 'Generating Audio, please be patient!',
        duration: 1500,
        position: 'middle',
      });
      toast.present();
      const response = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.openaiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'tts-1',
          input: text,
          voice: 'alloy',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.blob();
    } catch (error) {
      console.error('Error calling OpenAI TTS API:', error);
      throw new Error("Sorry, I couldn't process your TTS request.");
    }
  }

  setApiKey(key: string) {
    this.openaiKey = key;
    this.openai = new OpenAI({
      apiKey: this.openaiKey,
      dangerouslyAllowBrowser: true,
    });
  }

  getApiKey() {
    return this.openaiKey;
  }
}
