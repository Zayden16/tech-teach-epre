import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router"; // Import Router
import {
  IonBadge,
  IonChip,
  IonItem,
  IonLabel,
} from "@ionic/angular/standalone";
import { CourseOverviewPage } from "src/app/pages/course-overview/course-overview.page";
import { Course } from "src/model";

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

  getCourseStatus() {
    if (!this.course) {
      return false;
    }
    let isCompleted = true;
    for (const courseItem of this.course?.courseItems) {
      if (!courseItem.solved) {
        isCompleted = false;
      }
    }

    return isCompleted;
  }
}
