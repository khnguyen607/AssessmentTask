import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { EmployeeDto } from '../services/service-proxies';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'createEmployeeModal',
    templateUrl: './create-employee-modal.component.html',
    styleUrls: ['./create-employee-modal.component.css']
})
export class CreateEmployeeModalComponent implements OnInit {
    modalForm!: FormGroup;
    @Output() modalSave: EventEmitter<EmployeeDto> = new EventEmitter<EmployeeDto>();
    active = false;

    constructor(
        private fb: FormBuilder
    ) { }

    show(): void {
        this.active = true;
    }

    save(): void {
        var formData = new EmployeeDto(this.modalForm.value);
        this.modalSave.emit(formData);
        this.active = false;
    }

    close(): void {
        // this.active = false;
        console.log(this.modalForm.errors);
        
    }

    ngOnInit(): void {
        this.modalForm = this.fb.group({
            Code: ['', Validators.required],
            Name: ['', Validators.required],
            BirthDate: ['', Validators.required],
            Gender: ['', Validators.required],
            Mobile: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(11)]],
            Email: ['', [Validators.required, Validators.email]],
            Address: ['', Validators.required],
            FirstWorkingDate: ['', Validators.required],
            ResignDate: ['']
        }, { validators: this.endDateValidator });
    }

    endDateValidator(formGroup: FormGroup) {

        const FirstWorkingDate = formGroup.get('FirstWorkingDate');
        const ResignDate = formGroup.get('ResignDate');

        if (!ResignDate || !FirstWorkingDate) {
            return null;
        }

        const startDate = FirstWorkingDate.value;
        const endDate = ResignDate.value;
        console.log(startDate);

        if (!endDate || !startDate) {
            return null;
        }

        return (endDate > startDate) ? null : { 'invalidEndDate': true };
    }
}
