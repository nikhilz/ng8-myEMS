import { Injectable } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.model';

@Injectable({
    providedIn: 'root',
})
/**
 * employee service
 */
export class EmployeeDataService {
    getEmployeeList(): Employee[] {
        return [
            { Id: 1, Name: 'Nikhil', Department: 'Salesforce', DepartmentId: 1, Address: 'Pune, Maharashtra', Age: 26 },
            { Id: 2, Name: 'Nikhil1', Department: 'Salesforce', DepartmentId: 1, Address: 'Nagpur, Maharashtra', Age: 25 },
            { Id: 3, Name: 'Nikhil2', Department: 'HR', DepartmentId: 4, Address: 'Pune, Maharashtra', Age: 25 },
            { Id: 4, Name: 'Nikhil3', Department: 'Salesforce', DepartmentId: 1, Address: 'Pune, Maharashtra', Age: 30 },
            { Id: 5, Name: 'Nikhil4', Department: 'Angular', DepartmentId: 2, Address: 'Mumbai, Maharashtra', Age: 25 },
            { Id: 6, Name: 'Nikhil5', Department: 'Angular', DepartmentId: 2, Address: 'Pune, Maharashtra', Age: 28 },
            { Id: 7, Name: 'Nikhil6', Department: 'Java', DepartmentId: 3, Address: 'Pune, Maharashtra', Age: 26 },
            { Id: 8, Name: 'Nikhil7', Department: 'Salesforce', DepartmentId: 1, Address: 'Nagpur, Maharashtra', Age: 25 },
            { Id: 9, Name: 'Nikhil8', Department: 'Salesforce', DepartmentId: 1, Address: 'Pune, Maharashtra', Age: 27 },
            { Id: 10, Name: 'Nikhil9', Department: 'Java', DepartmentId: 3, Address: 'Mumbai, Maharashtra', Age: 25 },
            { Id: 11, Name: 'Nikhil10', Department: 'Salesforce', DepartmentId: 1, Address: 'Pune, Maharashtra', Age: 35 },
            { Id: 12, Name: 'Nikhil', Department: 'Salesforce', DepartmentId: 1, Address: 'Pune, Maharashtra', Age: 26 },
            { Id: 13, Name: 'Nikhil1', Department: 'Salesforce', DepartmentId: 1, Address: 'Nagpur, Maharashtra', Age: 25 },
            { Id: 14, Name: 'Nikhil2', Department: 'HR', DepartmentId: 4, Address: 'Pune, Maharashtra', Age: 25 },
            { Id: 15, Name: 'Nikhil3', Department: 'Salesforce', DepartmentId: 1, Address: 'Pune, Maharashtra', Age: 30 },
            { Id: 16, Name: 'Nikhil4', Department: 'Angular', DepartmentId: 2, Address: 'Mumbai, Maharashtra', Age: 25 },
            { Id: 17, Name: 'Nikhil5', Department: 'Angular', DepartmentId: 2, Address: 'Pune, Maharashtra', Age: 28 },
            { Id: 18, Name: 'Nikhil6', Department: 'Java', DepartmentId: 3, Address: 'Pune, Maharashtra', Age: 26 },
            { Id: 19, Name: 'Nikhil7', Department: 'Salesforce', DepartmentId: 1, Address: 'Nagpur, Maharashtra', Age: 25 },
            { Id: 20, Name: 'Nikhil8', Department: 'Salesforce', DepartmentId: 1, Address: 'Pune, Maharashtra', Age: 27 },
            { Id: 21, Name: 'Nikhil9', Department: 'Java', DepartmentId: 3, Address: 'Mumbai, Maharashtra', Age: 25 },
            { Id: 22, Name: 'Nikhil10', Department: 'Salesforce', DepartmentId: 1, Address: 'Pune, Maharashtra', Age: 35 },
            { Id: 23, Name: 'Nikhil', Department: 'Salesforce', DepartmentId: 1, Address: 'Pune, Maharashtra', Age: 26 },
            { Id: 24, Name: 'Nikhil1', Department: 'Salesforce', DepartmentId: 1, Address: 'Nagpur, Maharashtra', Age: 25 },
            { Id: 25, Name: 'Nikhil2', Department: 'HR', DepartmentId: 4, Address: 'Pune, Maharashtra', Age: 25 },
            { Id: 26, Name: 'Nikhil3', Department: 'Salesforce', DepartmentId: 1, Address: 'Pune, Maharashtra', Age: 30 },
            { Id: 27, Name: 'Nikhil4', Department: 'Angular', DepartmentId: 2, Address: 'Mumbai, Maharashtra', Age: 25 },
            { Id: 28, Name: 'Nikhil5', Department: 'Angular', DepartmentId: 2, Address: 'Pune, Maharashtra', Age: 28 },
            { Id: 29, Name: 'Nikhil6', Department: 'Java', DepartmentId: 3, Address: 'Pune, Maharashtra', Age: 26 },
            { Id: 30, Name: 'Nikhil7', Department: 'Salesforce', DepartmentId: 1, Address: 'Nagpur, Maharashtra', Age: 25 }
        ];
    }
}