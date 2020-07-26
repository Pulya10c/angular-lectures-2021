import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log('check Auth Guard');
    return Promise.resolve(false);
  }
}
