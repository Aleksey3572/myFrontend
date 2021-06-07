import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {DataService} from '../service/data.service';
import {Injectable} from '@angular/core';
@Injectable()
export class DataGuard implements CanActivate{
  constructor(private dataService: DataService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    if (this.dataService.isLoggedIn){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
