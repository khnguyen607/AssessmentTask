import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { CreateEmployeeModalComponent } from './create-employee-modal.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        EmployeeComponent,
        CreateEmployeeModalComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule 
    ],
    exports: [
        EmployeeComponent,
        CreateEmployeeModalComponent
    ]
})
export class EmployeeModule {
}
