import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HomeItemComponent } from 'src/app/components/home-item/home-item.component';
import { DataService } from 'src/app/services/data.service';
import { OpenaiService } from 'src/app/services/openai.service';
import { Course } from 'src/model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButton,
    IonMenuButton,
    IonButtons,
    IonTitle,
    IonContent,
    IonMenu,
    HomeItemComponent,
    CommonModule,
    IonList,
    IonLabel,
    IonItem,
    IonModal,
    IonInput,
    FormsModule,
  ],
})
export class HomePage implements OnInit {
  @ViewChild(IonModal) modal: IonModal | undefined;
  apiKey: string;
  courses: Course[] | undefined;
  constructor(
    private dataService: DataService,
    private openaiService: OpenaiService
  ) {
    this.apiKey = openaiService.getApiKey();
  }

  ngOnInit(): void {
    this.courses = this.dataService.getCourses();
  }

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  confirm() {
    this.openaiService.setApiKey(this.apiKey);
    this.modal?.dismiss(this.apiKey, 'confirm');
  }
}
