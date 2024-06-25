import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EmployeeDto, EmployeesServiceProxy } from '../services/service-proxies';
import { CreateEmployeeModalComponent } from './create-employee-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {
  @ViewChild('createEmployeeModal', { static: true }) createEmployeeModal!: CreateEmployeeModalComponent;
  employees!: EmployeeDto[];
  private subscription: Subscription;

  constructor(private _employeesServiceProxy: EmployeesServiceProxy) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription.add(
      this._employeesServiceProxy.getEmployees().subscribe(data => {
        this.employees = data;
        console.log(this.employees);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  createEmployee(): void {
    this.createEmployeeModal.show();
  }

  getEmployee(): void {
    this.subscription.add(
      this._employeesServiceProxy.getEmployees().subscribe(data => {
        this.employees = data;
      })
    );
  }

  onModalSave(formData: EmployeeDto) {
    console.log("Modal đã gửi dữ liệu:", formData);
    this.employees.push(formData);
    console.log(this.employees);
  }
}

