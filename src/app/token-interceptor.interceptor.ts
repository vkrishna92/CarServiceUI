import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem('token');
  console.log(token)
  const authReq = req.clone({
    setHeaders: {Authorization:`${token}`}
  });
  return next(authReq);
};
