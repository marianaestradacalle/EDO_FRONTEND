import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { EncargadoService } from '../services/encargado.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {
  constructor(private encargadoService: EncargadoService, private  roter: Router) {

  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.encargadoService.encargado) {
        console.log('no null');
        return true;
    } else {
        console.log('null');
        this.roter.navigate(['/inicio']);
        return false;
    }
}
}
