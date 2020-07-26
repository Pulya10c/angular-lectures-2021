import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/courses.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public courses: Course[] = [];
  public hasMoreCourses: boolean;
  public searchCriterion: string;
  public currentPage = 0;

  public newCourse = {} as Course;
  public editMode = false;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.initCourses();
  }

  initCourses() {
    this.currentPage = 0;
    this.loadCourses();
  }

  loadCourses() {
    this.courseService
      .getList(this.currentPage, this.searchCriterion)
      .subscribe(({ courses, hasMoreCourses }) => {
        this.courses =
          this.currentPage > 0
            ? this.courses.concat(courses)
            : courses;
        this.hasMoreCourses = hasMoreCourses;
      });
  }

  loadMoreCourses() {
    this.currentPage++;
    this.loadCourses();
  }

  createCourse() {
    this.courseService.createCourse(this.newCourse).subscribe(() => {
      this.newCourse = {} as Course;
      this.loadCourses();
    });
  }

  editCourse() {
    this.courseService.updateItem(this.newCourse).subscribe(edited => {
      const courseIdx = this.courses.findIndex(
        course => course.id === edited.id
      );
      this.courses[courseIdx] = edited;

      this.newCourse = {} as Course;
      this.editMode = false;
    });
  }

  onEdit(course: Course) {
    this.editMode = true;
    this.newCourse = { ...course };
  }

  onRemove(courseToDelete: Course) {
    this.courseService.removeItem(courseToDelete).subscribe(() => {
      this.courses = this.courses.filter(
        course => course.id !== courseToDelete.id
      );
    });
  }
}
