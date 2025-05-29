import { HttpInterceptorFn } from '@angular/common/http';

export const httpReqresApiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const r = req.clone({
    setHeaders: {
      'x-api-key': 'reqres-free-v1',
    },
  });
  return next(r);
};
