
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
 
 
@Injectable()
export class StudentGuard implements CanActivate {
 
    constructor(private router:Router ) {
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
 
        //check some condition  
        let type = localStorage.getItem('tip');
        if (!type )  {
            this.router.navigate(['/forbidden'])
            return false;
        } 
        return true;
    }
 
}