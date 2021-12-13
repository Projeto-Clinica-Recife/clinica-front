import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { TokenManager } from '../token-manager/token-manager.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        public tokenManager: TokenManager,
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.tokenManager.getTokenStorage();
        if(token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${token}`,
                }
            });
        }

        return next.handle(request);
    }
}