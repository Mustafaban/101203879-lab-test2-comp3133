import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LaunchesGridComponent } from './components/launches-grid/launches-grid.component';
import { LaunchFilterBarComponent } from './components/launches-filter-bar/launches-filter-bar.component';
import { LaunchInfoComponent } from './components/launches-info/launches-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule, 
    LaunchesGridComponent,
    LaunchFilterBarComponent,
    LaunchInfoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rocket Launch Explorer';
  selectedLaunch: any = null;
  filterYear: string = '';
  filterSuccess: string = '';
  
  onLaunchSelected(launch: any) {
    this.selectedLaunch = launch;
    window.scrollTo(0, 0);
  }
  
  onBackToList() {
    this.selectedLaunch = null;
  }
  
  onFilterChange(filters: any) {
    this.filterYear = filters.year;
    this.filterSuccess = filters.success;
  }
}