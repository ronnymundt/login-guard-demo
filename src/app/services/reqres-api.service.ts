import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EReqresApiUrl } from '../enums/reqres-api-url.enum';
import { ILoginEmailPassword, ILoginToken } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class ReqresApiService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  /**
   * 
   * @param email 
   * @param password 
   * @returns 
   */
  public getLoginTokenByEmailPassword$(email: string, password: string): Observable<string> {
    const data: ILoginEmailPassword = { email: email, password: password };
    return this._httpClient.post<ILoginToken>(EReqresApiUrl.login, { ...data }).pipe(map(x => x.token));  
  }

  /**
   * 
   * @returns 
   */
  public setLogout(): Observable<{}> {
    return this._httpClient.post<{}>(EReqresApiUrl.logout, null);
  }
}
