import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee() {
     return [
       {"id":1, "name":"mishan", "roll":"node developer"},
       {"id":2, "name":"kishan", "roll":"designer"},
       {"id":3, "name":"jishan", "roll":"php developer"}
     ]
  }
}
