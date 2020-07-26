import { OrderByPipe } from './order-by.pipe';
import { Course } from '../models/course';

let pipe: OrderByPipe<Course>;

describe('OrderByPipe', () => {
  const courses = [
    {
      id: 3,
      name: 'Title 3',
      date: '2018-05-10',
      length: 34,
      description: 'Description 3'
    },
    {
      id: 4,
      name: 'Title 3',
      date: '2018-05-10',
      length: 34,
      description: 'Description 3'
    },
    {
      id: 2,
      name: 'Title 2',
      date: '2018-05-10',
      length: 35,
      description: 'Description 2'
    },
    {
      id: 1,
      name: 'Title 1',
      date: '2018-05-10',
      length: 36,
      description: 'Description 1'
    }
  ];

  const orderedCourses = [
    {
      id: 1,
      name: 'Title 1',
      date: '2018-05-10',
      length: 36,
      description: 'Description 1'
    },
    {
      id: 2,
      name: 'Title 2',
      date: '2018-05-10',
      length: 35,
      description: 'Description 2'
    },
    {
      id: 3,
      name: 'Title 3',
      date: '2018-05-10',
      length: 34,
      description: 'Description 3'
    },
    {
      id: 4,
      name: 'Title 3',
      date: '2018-05-10',
      length: 34,
      description: 'Description 3'
    },
  ];

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort by specific field', () => {
    expect(pipe.transform(courses, 'name')).toEqual(orderedCourses);
  });
});
