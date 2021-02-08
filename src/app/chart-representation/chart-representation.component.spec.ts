import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { ChartRepresentationComponent } from './chart-representation.component';
import { Router, ActivatedRoute } from '@angular/router';



describe('ChartRepresentationComponent', () => {
  let component: ChartRepresentationComponent;
  let fixture: ComponentFixture<ChartRepresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartRepresentationComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate', inject([Router], (router: Router) => {
    const routerstub: Router = TestBed.inject(Router);
    spyOn(routerstub, 'navigate');
    component.showDetails({name:'Grade 1'});
    expect(router.navigate).toHaveBeenCalledWith(['/grid',{id:'Grade 1'}]);
  }));
});
