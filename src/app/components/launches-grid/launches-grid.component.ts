import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';

import { LaunchDataService } from '../../services/launch-data.service';

@Component({
  selector: 'app-launches-grid',
  templateUrl: './launches-grid.component.html',
  styleUrls: ['./launches-grid.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatChipsModule
  ]
})
export class LaunchesGridComponent implements OnInit {
  @Input() filterYear: string = '';
  @Input() filterSuccess: string = '';
  @Output() launchSelected = new EventEmitter<any>();
  
  launches: any[] = [];
  filteredLaunches: any[] = [];
  loading: boolean = true;
  error: boolean = false;
  
  constructor(private launchDataService: LaunchDataService) { }

  ngOnInit(): void {
    this.loadLaunches();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (this.launches.length > 0) {
      this.applyFilters();
    }
  }
  
  loadLaunches(): void {
    this.loading = true;
    this.launchDataService.getAllLaunches().subscribe({
      next: (data) => {
        this.launches = data;
        this.filteredLaunches = [...data];
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading launches:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
  
  applyFilters(): void {
    let result = [...this.launches];
    
    if (this.filterYear) {
      result = result.filter(launch => launch.launch_year === this.filterYear);
    }
    
    if (this.filterSuccess === 'success') {
      result = result.filter(launch => launch.launch_success === true);
    } else if (this.filterSuccess === 'failed') {
      result = result.filter(launch => launch.launch_success === false);
    }
    
    this.filteredLaunches = result;
  }
  
  selectLaunch(launch: any): void {
    this.launchSelected.emit(launch);
  }
  
  getFormattedDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}