import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/angular/standalone";
import { HomeItemComponent } from "src/app/components/home-item/home-item.component";
import { DataService } from "src/app/services/data.service";
import { Course } from "src/model";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    HomeItemComponent,
    CommonModule,
  ],
})
export class HomePage implements OnInit {
  courses: Course[] | undefined;
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.courses = this.dataService.getCourses();
  }
}
