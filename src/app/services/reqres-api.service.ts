import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ILoginEmailPassword, ILoginToken } from '../+state/login';
import { defaultPassword } from '../configs';

@Injectable({
  providedIn: 'root',
})
export class ReqresApiService {
  private httpClient = inject(HttpClient);
  private readonly baseUrl: string = 'https://reqres.in/api';

  /**
   * Service liefert login token zurück.
   * @param email
   * @param password
   * @returns
   */
  getLoginTokenByEmailPassword$(email: string, password: string) {
    // simuliere falsche passwort eingabe
    if (password !== defaultPassword) {
      return throwError(
        () => new HttpErrorResponse({ error: 'Invalid Login', status: 401 }),
      );
    }

    const data: ILoginEmailPassword = { email, password };
    return this.httpClient.post<ILoginToken>(`${this.baseUrl}/login`, {
      ...data,
    });
  }
}
