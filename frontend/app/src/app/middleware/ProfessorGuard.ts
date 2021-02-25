
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
 
 
@Injectable()
export class ProfessorGuard implements CanActivate {
 
    constructor(private router:Router ) {
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
 
        //check some condition  
        let type = localStorage.getItem('tip');
        if (type!='Professor' && type!='Admin' )  {
            this.router.navigate(['/forbidden'])
            return false;
        } 
        return true;
    }
 
}