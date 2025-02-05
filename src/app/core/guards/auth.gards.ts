import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";
@Injectable(
    {
        providedIn:'root'
    }
)
export class AuthGard implements CanActivate{
    constructor(private auth: AuthService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.auth.existToken())
        {
            return true;
        }
        else {
            this.router.navigateByUrl("/");
            return false;
        }

    }

}
