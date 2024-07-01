import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { EmployeeDto } from '../services/service-proxies';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

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
        if (this.modalForm.valid) {
            var formData = new EmployeeDto(this.modalForm.value);
            this.modalSave.emit(formData);
            this.active = false;
            this.modalForm.reset();
        } else {
            alert('Vui lòng nhập thông tin phù hợp.')
            this.modalForm.markAllAsTouched();

            // Log các trường chưa hợp lệ
            Object.keys(this.modalForm.controls).forEach(field => {
                const control = this.modalForm.get(field);
                if (control instanceof FormGroup) {
                    Object.keys(control.controls).forEach(innerField => {
                        const innerControl = control.get(innerField);
                        if (innerControl && innerControl.invalid) {
                            console.log(`${field}.${innerField} chưa hợp lệ.`);
                        }
                    });
                } else {
                    if (control && control.invalid) {
                        console.log(`${field} chưa hợp lệ.`);
                    }
                }
            });

        }
    }

    close(): void {
        this.active = false;
        // console.log(this.modalForm.errors);
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
        });

        this.modalForm.get('FirstWorkingDate')?.valueChanges.subscribe(() => {
            this.modalForm.get('ResignDate')?.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        });
        this.modalForm.get('ResignDate')?.valueChanges.subscribe(() => {
            this.modalForm.get('FirstWorkingDate')?.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        });
        this.modalForm.get('ResignDate')?.setValidators(this.endDateValidator(this.modalForm.get('FirstWorkingDate')));
    }

    endDateValidator(compareControl: AbstractControl | null): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            if (!compareControl) return null;
            const startDate = compareControl.value;
            const endDate = control.value;
            if (endDate && startDate && endDate <= startDate) {
                return { 'invalidEndDate': true };
            }
            return null;
        };
    }
}
