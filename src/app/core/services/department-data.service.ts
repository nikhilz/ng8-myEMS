import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DepartmentDataService {

    departments: any[];

    constructor() {
        this.departments = [
            { Id: 1, Name: "Salesforce", Description: "Salesforce" },
            { Id: 2, Name: "Angular", Description: "Angular" },
            { Id: 3, Name: "Java", Description: "Java" },
            { Id: 4, Name: "HR", Description: "HR" }];
    }

    getAllDepartments() {
        return this.departments;
    }

    getDepartmentById(id: number) {
        var data;
        this.departments.forEach(element => {
            if (element.Id === id) {
                data = element;
            }
        });
        return data;
    }

    getDepartmentByName(name: string) {        
        var data;
        this.departments.forEach(element => {
            if (element.Name === name) {
                data = element;
            }
        });
        return data;
    }
}