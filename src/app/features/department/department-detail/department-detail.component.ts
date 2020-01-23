import { Component, OnInit } from '@angular/core';

import { RouteStateService } from 'src/app/core/services/route-state.service';
import { Department } from 'src/app/core/models/department.model';
import { DepartmentDataService } from 'src/app/core/services/department-data.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: 'department-detail.component.html',
  styleUrls: ['department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  department: Department;

  constructor(
    private departmentService: DepartmentDataService,
    private routeStateService: RouteStateService,
    private toastService:ToastService) { }

  ngOnInit() {
    var routeState = this.routeStateService.getCurrent();
    this.department = this.departmentService.getDepartmentById(routeState.data);
    let status: boolean = this.onNetworkStatusChange();
    if (status) {
      this.toastService.addSingle("warn", "You are Offline", "");
    }
  }

  back() {
    this.routeStateService.loadPrevious();
  }
  onNetworkStatusChange() {
    let offline: boolean = !navigator.onLine;
    console.log('offline ' + offline);
    return offline;
  }
}
