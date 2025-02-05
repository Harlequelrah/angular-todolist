import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap, tap } from "rxjs";
import { environment } from "../../environements/environnement";
import { Token } from "../models/token/token";
import { Credentials } from "../types/credentials.type";


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public existToken(): boolean{
        return (localStorage.getItem("access_token") != null);
    }
    public logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");

    }

    private apiUrl: string = environment.apiUrl;
    private  baseUrl: string = `${this.apiUrl}/users`;
    constructor(private http: HttpClient) { }
    public login(userLoginRequest:Credentials): Observable<Token> {
        return this.http.post<Token>(`${this.baseUrl}/login`, userLoginRequest).pipe(
            tap((response:any) => {
                localStorage.setItem('access_token', response.access_token);
                if (userLoginRequest.stayLoggedIn) {
                    localStorage.setItem('refresh_token', response.refresh_token);
                }
            })
        );
    }

    register(formValue: { username: string, password: string, firstname: string, lastname: string, email: string }):Observable<Token> {
        return this.http.post(`${this.baseUrl}/create`, formValue).pipe(
            switchMap(
            () => {
                const username: string = formValue.username;
                const password: string = formValue.password;
                const credentials :Credentials= {
                        username: username,
                        password: password,
                        stayLoggedIn:true
                }

                return this.login(credentials);
            }
            )
        );

    }



}
