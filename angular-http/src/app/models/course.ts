export interface CourseAuthor {
  id?: number;
  firstName: string;
  lastName?: string;
}

export interface Course {
  id?: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors?: CourseAuthor[];
  isTopRated?: boolean;
}

export interface CourseResponse {
  courses: Course[];
  hasMoreCourses: boolean;
}
