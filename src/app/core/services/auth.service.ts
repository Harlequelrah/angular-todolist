import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap, tap } from "rxjs";
import { environment } from "../../environements/environnement";
import { Token } from "../models/token/token";


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl: string = environment.apiUrl;
    private  baseUrl: string = `${this.apiUrl}/users`;
    constructor(private http: HttpClient) { }
    public login(userLoginRequest: { username: string, password: string }): Observable<Token> {
        return this.http.post<Token>(`${this.baseUrl}/login`, userLoginRequest).pipe(
            tap((response:any) => {
                localStorage.setItem('access_token', response.access_token);
                localStorage.setItem('refresh_token', response.refresh_token);
            })
        );
    }

    register(formValue: { username: string, password: string, firstname: string, lastname: string, email: string }):Observable<Token> {
        return this.http.post(`${this.baseUrl}/create`, formValue).pipe(
            switchMap(
            () => {
                const username: string = formValue.username;
                const password: string = formValue.password;
                return this.login({ username, password });
            }
            )
        );

    }



}
