import { Component, Input } from "@angular/core";
import {
  IonBadge,
  IonChip,
  IonItem,
  IonLabel,
} from "@ionic/angular/standalone";
import { CommonModule } from "@angular/common";
import { Course } from "src/model";
import { Router } from "@angular/router"; // Import Router
import { CourseOverviewPage } from "src/app/pages/course-overview/course-overview.page";

@Component({
  selector: "app-home-item",
  standalone: true,
  imports: [IonItem, IonLabel, IonBadge, IonChip, CommonModule],
  templateUrl: "./home-item.component.html",
  styleUrls: ["./home-item.component.scss"],
})
export class HomeItemComponent {
  @Input() course: Course | undefined;
  coursePage = CourseOverviewPage;

  constructor(private router: Router) {}

  navigateToCourse() {
    if (this.course && this.course.id) {
      this.router.navigate(["/course", this.course.id]);
    }
  }
}
