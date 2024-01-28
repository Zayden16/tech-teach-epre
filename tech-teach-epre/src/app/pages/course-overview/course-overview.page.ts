import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonIcon, IonicModule } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { Course } from "src/model";
import { DataService } from "src/app/services/data.service";
import { HomePage } from "../home/home.page";

@Component({
  selector: "app-course-overview",
  templateUrl: "./course-overview.page.html",
  styleUrls: ["./course-overview.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CourseOverviewPage implements OnInit {
  courseId: string | null = null;
  course: Course | undefined;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get("id");
    if (this.courseId) {
      this.course = this.dataService.getCourseById(this.courseId);
    }
  }
}
