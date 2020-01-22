import { Component, OnInit } from '@angular/core';

import { RouteStateService } from 'src/app/core/services/route-state.service';
import { Department } from 'src/app/core/models/department.model';
import { DepartmentDataService } from 'src/app/core/services/department-data.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: 'department-detail.component.html',
  styleUrls: ['department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  department: Department;

  constructor(
    private departmentService: DepartmentDataService,
    private routeStateService: RouteStateService) { }

  ngOnInit() {
    var routeState = this.routeStateService.getCurrent();
    this.department = this.departmentService.getDepartmentById(routeState.data);
  }

  back() {
    this.routeStateService.loadPrevious();
  }
}
