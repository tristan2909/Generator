import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NumberOptionsService {
    private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/nuberOptions'

    constructor(private http: HttpClient) {}

    getNumberOptions(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    updateNumberOptions(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    getNumberOptionsList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }
}