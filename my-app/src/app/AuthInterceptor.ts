import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const access = localStorage.getItem("access");
    let newReq = req;
    if (access) {
      newReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${access}`)
      });
    }
    const csrfToken = this.getCSRFToken();
    if (csrfToken) {
      newReq = newReq.clone({
        headers: newReq.headers.set('X-CSRFToken', csrfToken)
      });
    }
    return next.handle(newReq);
  }

  private getCSRFToken(): string | null {
    return document.cookie.split(';')
      .map(c => c.trim())
      .find(c => c.startsWith('csrftoken='))
      ?.split('=')[1] || null;
  }
}
