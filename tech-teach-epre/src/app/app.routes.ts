import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "home",
    loadComponent: () =>
      import("./pages/home/home.page").then((m) => m.HomePage),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "course/:courseId",
    loadComponent: () =>
      import("./pages/course-overview/course-overview.page").then(
        (m) => m.CourseOverviewPage,
      ),
  },
  {
    path: "course/:courseId/course-item/:itemId",
    loadComponent: () =>
      import("./pages/course-item/course-item.page").then(
        (m) => m.CourseItemPage,
      ),
  },
];
