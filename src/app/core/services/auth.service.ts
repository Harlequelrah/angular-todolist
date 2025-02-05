import { Injectable } from "@angular/core";
import { AccessToken } from "../models/token/accessToken";
import { RefreshToken } from "../models/token/refreshToken";
import { exhaustMap, map, Observable, switchMap, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Token } from "../models/token/token";


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private baseUrl: string = "http://localhost:8000/users";
    private access_token!: string;
    private refresh_token!: string;
    constructor(private http: HttpClient) { }
    public login(userLoginRequest: { username: string, password: string }): Observable<Token> {
        return this.http.post<Token>(`${this.baseUrl}/login`, userLoginRequest).pipe(
            map((response: any) => {
                return new Token(response.access_token, response.refresh_token, response.token_type);
            }),
            tap((token: Token) => {
                this.access_token = token.getAccessToken().getToken();
                this.refresh_token = token.getRefreshToken().getToken();
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

    public getAccessToken(): string {
        return this.access_token;
    }
    public getRefreshToken(): string {
        return this.refresh_token;
    }

}
