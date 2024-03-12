import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PasswordOptionsService {
    private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/password'

    constructor(private http: HttpClient) { }

    getPasswordOptions(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }

    updatePasswordOptions(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }
}