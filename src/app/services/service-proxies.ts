import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeesServiceProxy {
    private apiUrl = 'assets/employee.json';

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<EmployeeDto[]> {
        return this.http.get<EmployeeDto[]>(this.apiUrl);
    }

    createOrEdit(body: EmployeeDto | undefined): Observable<void> {
        // let url_ = this.baseUrl + "/api/services/app/Books/CreateOrEdit";
        // url_ = url_.replace(/[?&]$/, "");

        // const content_ = JSON.stringify(body);

        // let options_: any = {
        //     body: content_,
        //     observe: "response",
        //     responseType: "blob",
        //     headers: new HttpHeaders({
        //         "Content-Type": "application/json-patch+json",
        //     })
        // };

        // return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
        //     return this.processCreateOrEdit(response_);
        // })).pipe(_observableCatch((response_: any) => {
        //     if (response_ instanceof HttpResponseBase) {
        //         try {
        //             return this.processCreateOrEdit(<any>response_);
        //         } catch (e) {
        //             return <Observable<void>><any>_observableThrow(e);
        //         }
        //     } else
        //         return <Observable<void>><any>_observableThrow(response_);
        // }));
        return new Observable<void>();
    }
}

export interface IEmployeeDto {
    Id: number;
    Code: string;
    ParentId: number;
    IsGroup: boolean;
    Name: string;
    BirthDate: string;
    FileNo: string;
    GenderName: string;
    Mobile: string;
    Tel: string;
    Email: string;
    Domicile: string;
    Address: string;
    DeptName0: string;
    FirstWorkingDate: string;
    ResignDate: string;
    BranchCode: string;
    IsActive: boolean;
    CreatedBy: number;
    CreatedAt: string;
    ModifiedBy: number;
    ModifiedAt: string;
    _SelectKey__lde9wl: boolean;
    _RowNumber__b8dqzh: number;
}

export class EmployeeDto implements IEmployeeDto {
    Id: number = 0;
    Code!: string;
    ParentId!: number;
    IsGroup!: boolean;
    Name!: string;
    BirthDate!: string;
    FileNo!: string;
    GenderName!: string;
    Mobile!: string;
    Tel!: string;
    Email!: string;
    Domicile!: string;
    Address!: string;
    DeptName0!: string;
    FirstWorkingDate!: string;
    ResignDate!: string;
    BranchCode!: string;
    IsActive!: boolean;
    CreatedBy!: number;
    CreatedAt!: string;
    ModifiedBy!: number;
    ModifiedAt!: string;
    _SelectKey__lde9wl!: boolean;
    _RowNumber__b8dqzh!: number;

    constructor(data?: IEmployeeDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.Id = _data["Id"];
            this.Code = _data["Code"];
            this.ParentId = _data["ParentId"];
            this.IsGroup = _data["IsGroup"];
            this.Name = _data["Name"];
            this.BirthDate = _data["BirthDate"];
            this.FileNo = _data["FileNo"];
            this.GenderName = _data["GenderName"];
            this.Mobile = _data["Mobile"];
            this.Tel = _data["Tel"];
            this.Email = _data["Email"];
            this.Domicile = _data["Domicile"];
            this.Address = _data["Address"];
            this.DeptName0 = _data["DeptName0"];
            this.FirstWorkingDate = _data["FirstWorkingDate"];
            this.ResignDate = _data["ResignDate"];
            this.BranchCode = _data["BranchCode"];
            this.IsActive = _data["IsActive"];
            this.CreatedBy = _data["CreatedBy"];
            this.CreatedAt = _data["CreatedAt"];
            this.ModifiedBy = _data["ModifiedBy"];
            this.ModifiedAt = _data["ModifiedAt"];
            this._SelectKey__lde9wl = _data["_SelectKey__lde9wl"];
            this._RowNumber__b8dqzh = _data["_RowNumber__b8dqzh"];
        }
    }

    static fromJS(data: any): EmployeeDto {
        data = typeof data === 'object' ? data : {};
        let result = new EmployeeDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.Id;
        data["Code"] = this.Code;
        data["ParentId"] = this.ParentId;
        data["IsGroup"] = this.IsGroup;
        data["Name"] = this.Name;
        data["BirthDate"] = this.BirthDate;
        data["FileNo"] = this.FileNo;
        data["GenderName"] = this.GenderName;
        data["Mobile"] = this.Mobile;
        data["Tel"] = this.Tel;
        data["Email"] = this.Email;
        data["Domicile"] = this.Domicile;
        data["Address"] = this.Address;
        data["DeptName0"] = this.DeptName0;
        data["FirstWorkingDate"] = this.FirstWorkingDate;
        data["ResignDate"] = this.ResignDate;
        data["BranchCode"] = this.BranchCode;
        data["IsActive"] = this.IsActive;
        data["CreatedBy"] = this.CreatedBy;
        data["CreatedAt"] = this.CreatedAt;
        data["ModifiedBy"] = this.ModifiedBy;
        data["ModifiedAt"] = this.ModifiedAt;
        data["_SelectKey__lde9wl"] = this._SelectKey__lde9wl;
        data["_RowNumber__b8dqzh"] = this._RowNumber__b8dqzh;
        return data;
    }
}