import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { IonToast, ToastController } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { chevronBackOutline } from "ionicons/icons";
import { DataService } from "src/app/services/data.service";
import { CourseItem } from "src/model";

@Component({
  selector: "app-course-item",
  templateUrl: "./course-item.page.html",
  styleUrls: ["./course-item.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CommonModule, IonToast],
})
export class CourseItemPage implements OnInit {
  courseId: string | null = null;
  courseItemId: string | null = null;
  courseItem: CourseItem | undefined;
  safeUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private toastController: ToastController,
    private sanitizer: DomSanitizer,
  ) {
    addIcons({
      chevronBackOutline,
    });
  }

  ngOnInit() {
    this.courseItemId = this.route.snapshot.paramMap.get("itemId");
    if (this.courseItemId) {
      this.courseItem = this.dataService.getCourseItemById(this.courseItemId);
    }

    this.courseId = this.route.snapshot.paramMap.get("courseId");

    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.courseItem?.mediaUrl || "",
    );
  }

  async presentToast(message: string, color: string = "success") {
    const toast = await this.toastController.create({
      message: message,
      position: "top",
      duration: 1000,
      color: color,
    });
    toast.present();
  }

  onOptionSelected(questionId: number, selectedOptionId: number) {
    const question = this.courseItem?.questions?.find(
      (q) => q.id === questionId,
    );

    const selectedOption = question?.options.find(
      (o) => o.id === selectedOptionId,
    );

    if (selectedOption?.correct) {
      this.dataService.setQuestionToSolved(
        Number(this.courseId),
        Number(this.courseItemId),
        questionId,
      );
      this.presentToast("Correct answer! 🎉");
    } else {
      this.presentToast("Incorrect answer. Try again.", "danger");
    }
  }

  validate() {
    if (this.courseItem?.type === "Quiz") {
      if (this.courseItem?.questions?.every((q) => q.solved)) {
        this.dataService.setCourseItemToSolved(
          Number(this.courseId),
          Number(this.courseItemId),
        );
        this.presentToast("Course item solved! 🎉");
        this.goBack();
      } else {
        this.presentToast("Not all questions are solved. Try again.", "danger");
      }
    }
    if (this.courseItem?.type === "Text") {
      this.dataService.setCourseItemToSolved(
        Number(this.courseId),
        Number(this.courseItemId),
      );
      this.presentToast("Course item solved! 🎉");
      this.goBack();
    }
    if (this.courseItem?.type === "Video") {
      this.dataService.setCourseItemToSolved(
        Number(this.courseId),
        Number(this.courseItemId),
      );
      this.presentToast("Course item solved! 🎉");
      this.goBack();
    }
  }

  goBack() {
    this.router.navigate(["/course/" + this.courseId]);
  }
}
