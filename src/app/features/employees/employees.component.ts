import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.model';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { EmployeeDataService } from 'src/app/core/services/employee-data.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-employees',
  templateUrl: 'employees.component.html',
  styleUrls: ['employees.component.css']
})
export class EmployeesComponent implements OnInit {
  columns: any[];

  employees: Employee[];

  pageSize: number;

  constructor(
    private routeStateService: RouteStateService,
    private employeeService: EmployeeDataService,
    private toastService: ToastService) { }

  ngOnInit() {

    this.pageSize = 10;

    this.columns = [
      { field: 'Name', header: 'Name' },
      { field: 'Department', header: 'Department' },
      { field: 'Address', header: 'Address' },
      { field: 'Age', header: 'Age' }
    ];

    this.employees = this.employeeService.getEmployeeList();

    let status: boolean = this.onNetworkStatusChange();
    if (status) {
      console.log('status ' + status);
      this.toastService.addSingle("warn", "You are Offline", "");
    }
  }

  goToDepartmentDetails(department: number) {
    this.routeStateService.add("Department details", "/main/departments/department-detail", department, false);
  }
  onNetworkStatusChange() {
    let offline: boolean = !navigator.onLine;
    return offline;
  }
}
