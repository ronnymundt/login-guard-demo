import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {throwError} from "rxjs";
import {ILoginEmailPassword, ILoginToken} from '../+state/login';

@Injectable({
  providedIn: 'root'
})
export class ReqresApiService {
  private readonly baseUrl: string = 'https://reqres.in/api';
  constructor(
    private _httpClient: HttpClient
  ) { }

  /**
   * Service liefert login token zurück.
   * @param email
   * @param password
   * @returns
   */
  public getLoginTokenByEmailPassword$(email: string, password: string){
    if(password !== '1234ABC') { // simulate invalid password
      return throwError(() => new HttpErrorResponse({error: 'Invalid Login', status: 401}));
    }

    const data: ILoginEmailPassword = { email: email, password: password };
    return this._httpClient.post<ILoginToken>(`${this.baseUrl}/login`, { ...data });
  }
}
