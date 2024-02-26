import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NumberOptionsService {
    private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/number'

    constructor(private http: HttpClient) {}

    getNumberOptions(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }

    updateNumberOptions(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }
}