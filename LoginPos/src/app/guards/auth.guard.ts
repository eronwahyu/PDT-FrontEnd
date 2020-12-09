import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../services/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  authstatus:any;

  constructor(
    private serviceService: ServiceService
  ) {}

  canActivate(): boolean {
    this.serviceService.authenticationState.subscribe((data) => {
      this.authstatus=data;
    });
    return this.authstatus;
  }
  
}
