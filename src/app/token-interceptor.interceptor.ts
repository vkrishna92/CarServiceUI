import { HttpInterceptorFn } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

export const tokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem('token');

  if(token == null){
    return next(req);
  }
  const authReq = req.clone({
    setHeaders: {Authorization:`${token}`}
  });
  return next(authReq);
};
