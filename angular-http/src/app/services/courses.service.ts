import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Course, CourseResponse, CourseAuthor } from '../models/course';

@Injectable()
export class CourseService {
  // private readonly COURSES_URL = 'http://localhost:3004/courses';
  // private readonly AUTHORS_URL = 'http://localhost:3004/authors';
  private readonly COURSES_URL = 'courses';
  private readonly AUTHORS_URL = 'authors';
  private readonly LIMIT = 10;

  constructor(private http: HttpClient) {}

  getList(
    page: number = 0,
    searchCriteria?: string
  ): Observable<CourseResponse> {
    const params = new HttpParams()
      .set('start', (page * this.LIMIT).toString())
      .set('count', this.LIMIT.toString())
      .set('textFragment', searchCriteria || '');

    return this.http
      .get<Course[]>(this.COURSES_URL, {
        params
      })
      .pipe(
        retry(4),
        map(courses => ({
          courses,
          hasMoreCourses: courses.length === this.LIMIT
        })),
        catchError(error => {
          console.log('[ERROR]', error);
          return EMPTY;
        })
      );
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.COURSES_URL, course);
  }

  getItemById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.COURSES_URL}/${id}`);
  }

  updateItem(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.COURSES_URL}/${course.id}`, course);
  }

  removeItem(course: Course): Observable<any> {
    return this.http.delete(`${this.COURSES_URL}/${course.id}`);
  }
}
