import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteStateService } from 'src/app//core/services/route-state.service';
import { DepartmentDataService } from 'src/app/core/services/department-data.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-department-list',
  templateUrl: 'department-list.component.html',
  styleUrls: ['department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  columns: any[];

  departments: any[];

  constructor(private departmentService: DepartmentDataService, private routeStateService: RouteStateService, 
    private toastService: ToastService) {
    this.columns = [
      { field: 'Name', header: 'Name' },
      { field: 'Description', header: 'Description' }];
  }

  ngOnInit() {
    this.departments = this.departmentService.getAllDepartments();
    let status: boolean = this.onNetworkStatusChange();
    if (status) {
      this.toastService.addSingle("warn", "You are Offline", "");
    }
  }


  onNetworkStatusChange() {
    let offline: boolean = !navigator.onLine;
    console.log('offline ' + offline);
    return offline;
  }

  goToDepartmentDetails(department: number) {
    this.routeStateService.add("Department details", "/main/departments/department-detail", department, false);
  }

}
