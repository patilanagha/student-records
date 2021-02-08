import { Injectable } from '@angular/core';
import { IStudentRecord } from './grid-representation/models/studentRecord-model';
@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  studentArray: Array<IStudentRecord> = [
    {
      studentName: 'Alice',
      age: 5,
      email: 'alice@gmail.com1',
      english: 88,
      maths: 90,
      science: 98,
      socialStudies: 87,
      grade: 0,
    },
    {
      studentName: 'Brandon',
      age: 5,
      email: 'alice@gmail.com2',
      english: 88,
      maths: 90,
      science: 98,
      socialStudies: 87,
      grade: 0,
    },
    {
      studentName: 'Carry',
      age: 5,
      email: 'alice@gmail.com3',
      english: 10,
      maths: 10,
      science: 10,
      socialStudies: 10,
      grade: 0,
    },
    {
      studentName: 'Denise',
      age: 5,
      email: 'alice@gmail.com4',
      english: 40,
      maths: 40,
      science: 40,
      socialStudies: 40,
      grade: 0,
    },
    {
      studentName: 'Emily',
      age: 5,
      email: 'alice@gmail.com5',
      english: 88,
      maths: 90,
      science: 98,
      socialStudies: 87,
      grade: 0,
    },

    {
      studentName: 'Graham',
      age: 5,
      email: 'alice@gmail.com6',
      english: 88,
      maths: 90,
      science: 98,
      socialStudies: 87,
      grade: 0,
    },
    {
      studentName: 'Henry',
      age: 5,
      email: 'alice@gmail.com7',
      english: 88,
      maths: 90,
      science: 98,
      socialStudies: 87,
      grade: 0,
    },
    {
      studentName: 'Carry',
      age: 5,
      email: 'alice@gmail.com8',
      english: 88,
      maths: 90,
      science: 98,
      socialStudies: 87,
      grade: 0,
    },
    {
      studentName: 'Denise',
      age: 5,
      email: 'alice@gmail.com9',
      english: 88,
      maths: 90,
      science: 98,
      socialStudies: 87,
      grade: 0,
    },
    {
      studentName: 'Emily',
      age: 5,
      email: 'alice@gmail.com10',
      english: 88,
      maths: 90,
      science: 98,
      socialStudies: 87,
      grade: 0,
    },

    {
      studentName: 'Lucy',
      age: 5,
      email: 'alice@gmail.com11',
      english: 88,
      maths: 90,
      science: 98,
      socialStudies: 87,
      grade: 0,
    },
    {
      studentName: 'Monica',
      age: 5,
      email: 'alice@gmail.com12',
      english: 33,
      maths: 33,
      science: 33,
      socialStudies: 33,
      grade: 0,
    },
    {
      studentName: 'Carry',
      age: 5,
      email: 'alice@gmail.com13',
      english: 60,
      maths: 60,
      science: 60,
      socialStudies: 60,
      grade: 0,
    },
    {
      studentName: 'Denise',
      age: 5,
      email: 'alice@gmail.com14',
      english: 50,
      maths: 50,
      science: 50,
      socialStudies: 50,
      grade: 0,
    },
    {
      studentName: 'Emily',
      age: 5,
      email: 'alice@gmail.com15',
      english: 20,
      maths: 20,
      science: 20,
      socialStudies: 20,
      grade: 0,
    },
  ];

  constructor() {}
  grade1Student;
  grade2Student;
  grade3Student;
  calculateStudentGrade() {
    this.grade1Student = 0;
    this.grade2Student = 0;
    this.grade3Student = 0;
    this.studentArray.forEach((studentRecord) => {
      let totalMarks =
        studentRecord.english +
        studentRecord.maths +
        studentRecord.science +
        studentRecord.socialStudies;
      let percentageMarks = totalMarks / 4;
      if (percentageMarks < 35) {
        studentRecord['grade'] = 3;
        this.grade3Student++;
      } else if (percentageMarks < 70) {
        studentRecord['grade'] = 2;
        this.grade2Student++;
      } else {
        studentRecord['grade'] = 1;
        this.grade1Student++;
      }
    });
  }

  getChartData() {
    return [
      { value: this.grade1Student, name: 'Grade 1' },
      { value: this.grade2Student, name: 'Grade 2' },
      { value: this.grade3Student, name: 'Grade 3' },
    ];
  }

  getStudentaData() {
    return this.studentArray;
  }
}
