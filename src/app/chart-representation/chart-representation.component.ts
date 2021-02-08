import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetDataService } from '../get-data.service';
@Component({
  selector: 'app-chart-representation',
  templateUrl: './chart-representation.component.html',
  styleUrls: ['./chart-representation.component.scss'],
})
export class ChartRepresentationComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private dataService: GetDataService) {}
  option;
  ngOnInit(): void {
    this.dataService.getStudentGrade();
    console.log(this.dataService.getChartData());
    this.option = {
      id: 'student',
      title: {
        text: '% of students passed in year 2018-2019 session',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'horizontal',
        bottom: 'bottom',
      },
      series: [
        {
          type: 'pie',
          radius: '80%',
          data:this.dataService.getChartData(),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
  }

  showDetails(param) {
    this.router.navigate(['/grid', { id: param.name }]);
  }
}
