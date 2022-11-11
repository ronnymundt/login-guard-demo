import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginActions } from '../../actions/login.actions';
import { ILoginState } from '../../interfaces/login.interface';
import { SelectLogin } from '../../selectors/login.selectors';

@Component({
  selector: 'bit-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _loginStore: Store<ILoginState>,
    private _router: Router
  ) { }

  ngOnInit(): void {
    
    this._loginStore.dispatch(LoginActions.getLoginToken({
      email: 'michael.lawson@reqres.in', password: '123'
    }));

    this._loginStore.select(SelectLogin).subscribe((state: ILoginState) => {
      if(!state || !state.isSuccess) { return; }

      console.log(state);
      

      this._router.navigate(['home']);
    });
    
  }

}
