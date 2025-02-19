import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  // private apiUrl = "https://fyhubproapi.azurewebsites.net";
  // constructor(private http: HttpClient) {}
  // // Fetch categories from the API
  // getCategories(tenantId: number): Observable<any[]> {
  //   const url = `${this.apiUrl}/api/Category/Category?tenantId=${tenantId}`;
  //   return this.http.get<any[]>(url); // Return the observable directly
  // }
}
