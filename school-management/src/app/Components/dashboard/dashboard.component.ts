import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  totalStudents: number = 200;
  totalTeachers: number = 50;
  totalClasses: number = 20;
}
