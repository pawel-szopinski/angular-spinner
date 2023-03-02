import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoadingService } from './loading.service';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {

  constructor(private loading: LoadingService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loading.set(true, request.url);

    return next
      .handle(request)
      .pipe(finalize(() => this.loading.set(false, request.url)));
  }
}
