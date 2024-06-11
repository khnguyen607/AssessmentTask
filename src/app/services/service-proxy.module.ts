import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesServiceProxy } from './service-proxies';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    EmployeesServiceProxy
  ],
})
export class ServiceProxyModule { }
