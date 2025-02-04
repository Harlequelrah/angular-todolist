import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    constructor(private auth : AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const access_token: string = this.auth.getAccessToken();
        const headers = new HttpHeaders()
            .append('Authorization', `Bearer ${access_token}`)
            .append('Content-Type', 'application/json');
        const modifReq = req.clone({ headers });
        return next.handle(modifReq);
    }

}
