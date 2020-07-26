import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingGuard implements CanLoad {
  public canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    console.log('check Loading Guard');
    return true;
  }
}
