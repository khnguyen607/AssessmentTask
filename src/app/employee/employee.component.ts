import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDto, EmployeesServiceProxy } from '../services/service-proxies';
import { CreateEmployeeModalComponent } from './create-employee-modal.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @ViewChild('createEmployeeModal', { static: true }) createEmployeeModal!: CreateEmployeeModalComponent;

  employees!: EmployeeDto[];

  constructor(
    private _employeesServiceProxy: EmployeesServiceProxy
  ) { }

  ngOnInit(): void {
    this._employeesServiceProxy.getEmployees().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
  }

  createEmployee(): void {
    this.createEmployeeModal.show();
  }

  getEmployee(): void {
    this._employeesServiceProxy.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  onModalSave(formData: EmployeeDto) {
    console.log("Modal đã gửi dữ liệu:", formData);
    this.employees.push(formData)
    console.log(this.employees);
  }
  
}
