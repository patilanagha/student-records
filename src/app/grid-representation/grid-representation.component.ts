import { Component, OnInit, ViewChild } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { IStudentRecord } from './models/studentRecord-model';
@Component({
  selector: 'app-grid-representation',
  templateUrl: './grid-representation.component.html',
  styleUrls: ['./grid-representation.component.scss'],
})
export class GridRepresentationComponent implements OnInit {
  constructor(
    private getDataService: GetDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  studentsData:Array<IStudentRecord>;

  @ViewChild('f') rowEditFormRef: NgForm;
  enableEdit = false;
  enableEditIndex = null;
  rowEditForm: FormGroup;
  rowIndex;
  grade;
  ngOnInit(): void {
    this.grade = this.route.snapshot.paramMap.get('id')?.split(' ')[1];
     this.studentsData = this.getDataService.getStudentaData().filter((rec)=>{
     return rec.grade ==this.grade;
     });

    this.rowEditForm = new FormGroup({
      studentName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      english: new FormControl(null, [
        Validators.required,
        this.allowedMarks.bind(this),
      ]),
      age: new FormControl(null, [
        Validators.required,
        this.allowedAge.bind(this),
      ]),
      maths: new FormControl(null, [
        Validators.required,
        this.allowedMarks.bind(this),
      ]),
      science: new FormControl(null, [
        Validators.required,
        this.allowedMarks.bind(this),
      ]),
      socialStudies: new FormControl(null, [
        Validators.required,
        this.allowedMarks.bind(this),
      ]),
    });
  }
  allowedMarks(control: FormControl): { [s: string]: boolean } {
    if (
      control.value < 0 ||
      control.value > 100 ||
      isNaN(Number(control.value))
    ) {
      return { marksNotAllowed: true };
    }
    return null;
  }
  allowedAge(control: FormControl): { [s: string]: boolean } {
    if (
      control.value < 0 ||
      control.value > 15 ||
      isNaN(Number(control.value))
    ) {
      return { ageNotAllowed: true };
    }
    return null;
  }

  backToChart() {
    this.router.navigate(['']);
  }

  enableEditMethod(e, i) {
    this.enableEdit = true;
    this.rowIndex = i;
    this.enableEditIndex = i;
  }
  saveRecord(e: Event) {
    this.enableEdit = false;
    e.stopPropagation();
  }
  cancel(e: Event) {
    this.enableEdit = false;
    e.stopPropagation();
  }
}
