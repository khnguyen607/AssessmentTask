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
  private subscription: Subscription = new Subscription();

  constructor(private _employeesServiceProxy: EmployeesServiceProxy) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  createEmployee(): void {
    this.createEmployeeModal.show();
  }

  getEmployee(): void {
    this.subscription.add(
      this._employeesServiceProxy.getEmployees().subscribe({
        next: (data) => {
          this.employees = data;
        },
        error: (err) => {
          console.error('Error fetching employees', err);
        }
      })
    );
  }

  onModalSave(formData: EmployeeDto) {
    this.employees.push(formData);
  }
}
