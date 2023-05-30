import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HomeService {
    private employeesData = new BehaviorSubject([]);
    public employeesObservable = this.employeesData.asObservable();

    setEmploeesData(response: any) {
        this.employeesData.next(response);
    }

    getEmployeesData() {
        console.log("employeesDataInShell",this.employeesObservable);
        return this.employeesObservable;
    }
}