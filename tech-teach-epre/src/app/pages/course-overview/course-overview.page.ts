import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/model';
import { DataService } from 'src/app/services/data.service';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { CourseOverviewItemComponent } from 'src/app/components/course-overview-item/course-overview-item.component';
import {
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.page.html',
  styleUrls: ['./course-overview.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseOverviewItemComponent,
    IonHeader,
    IonToolbar,
    IonButton,
    IonButtons,
    IonIcon,
    IonTitle,
    IonBadge,
    IonContent,
    IonList,
  ],
})
export class CourseOverviewPage implements OnInit {
  courseId: string | null = null;
  course: Course | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {
    addIcons({
      chevronBackOutline,
    });
  }

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    if (this.courseId) {
      this.course = this.dataService.getCourseById(this.courseId);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
