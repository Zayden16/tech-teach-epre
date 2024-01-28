import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  IonButton,
  IonChip,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/angular/standalone";
import { CourseItem } from "src/model";

@Component({
  selector: "app-course-overview-item",
  standalone: true,
  imports: [IonItem, IonLabel, IonIcon, IonButton, IonChip, CommonModule],
  templateUrl: "./course-overview-item.component.html",
  styleUrls: ["./course-overview-item.component.scss"],
})
export class CourseOverviewItemComponent implements OnInit {
  @Input() courseItem: CourseItem | undefined;
  courseId: string | undefined;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.courseId = params["courseId"];
    });
  }

  navigateToCourseItem() {
    if (this.courseItem && this.courseItem.id) {
      this.router.navigate([
        "/course/" + this.courseId + "/course-item/" + this.courseItem.id,
      ]);
    }
  }
}
