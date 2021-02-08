import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GridRepresentationComponent } from './grid-representation.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('GridRepresentationComponent', () => {
  let component: GridRepresentationComponent;
  let fixture: ComponentFixture<GridRepresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridRepresentationComponent],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable editing', () => {
    const event = new MouseEvent('click');
    component.enableEditMethod(event,0);
    expect(component.enableEdit).toBeTruthy();
  });

  it('should cancel editing', () => {
    const event = new MouseEvent('click');
    spyOn(event, 'stopPropagation');
    component.cancel(event);
    expect(component.enableEdit).toBeFalsy();
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('save should stop editing', () => {
    const event = new MouseEvent('click');
    spyOn(event, 'stopPropagation');
    component.saveRecord(event);
    expect(component.enableEdit).toBeFalsy();
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('should backToChart', inject([Router], (router: Router) => {
    const routerstub: Router = TestBed.inject(Router);
    spyOn(routerstub, 'navigate');
    component.backToChart();
    expect(router.navigate).toHaveBeenCalled();
  }));

  it('allowedMarks', () => {
    let control =new FormControl( 101)
    let result = component.allowedMarks(control);
    expect(result).toEqual({marksNotAllowed: true});
  });

  it('allowedMarks in range', () => {
    let control =new FormControl( 81)
    let result = component.allowedMarks(control);
    expect(result).toEqual(null);
  });

  it('allowed age in range', () => {
    let control =new FormControl(55)
    let result = component.allowedAge(control);
    expect(result).toEqual({ageNotAllowed: true});
  });

  it('allowedMarks in range', () => {
    let control =new FormControl(10)
    let result = component.allowedAge(control);
    expect(result).toEqual(null);
  });



});
