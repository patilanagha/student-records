import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartRepresentationComponent } from './chart-representation/chart-representation.component';
import { GridRepresentationComponent } from './grid-representation/grid-representation.component';

const routes: Routes = [
  { path: '', component: ChartRepresentationComponent },
  { path: 'grid', component: GridRepresentationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
