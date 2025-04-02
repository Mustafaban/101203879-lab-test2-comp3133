import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { LaunchDataService } from '../../services/launch-data.service';

@Component({
  selector: 'app-launch-filter-bar',
  templateUrl: './launches-filter-bar.component.html',
  styleUrls: ['./launches-filter-bar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class LaunchFilterBarComponent implements OnInit {
  @Output() filterChange = new EventEmitter<any>();
  
  years: string[] = [];
  selectedYear: string = '';
  selectedStatus: string = '';
  
  constructor(private launchDataService: LaunchDataService) { }

  ngOnInit(): void {
    this.loadYears();
  }
  
  loadYears(): void {
    this.launchDataService.getAllLaunches().subscribe({
      next: (data) => {
        const uniqueYears = new Set<string>();
        data.forEach(launch => uniqueYears.add(launch.launch_year));
        this.years = Array.from(uniqueYears).sort();
      },
      error: (err) => {
        console.error('Error loading years:', err);
      }
    });
  }
  
  applyFilters(): void {
    this.filterChange.emit({
      year: this.selectedYear,
      success: this.selectedStatus
    });
  }
  
  resetFilters(): void {
    this.selectedYear = '';
    this.selectedStatus = '';
    this.filterChange.emit({
      year: '',
      success: ''
    });
  }
}