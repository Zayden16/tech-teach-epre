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
    path: "course-overview/:id",
    loadComponent: () =>
      import("./pages/course-overview/course-overview.page").then(
        (m) => m.CourseOverviewPage,
      ),
  },
];
