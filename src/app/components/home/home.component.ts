import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginActions } from '../../actions/login.actions';
import { ILoginState } from '../../interfaces/login.interface';

@Component({
  selector: 'bit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _store: Store<ILoginState>
  ) { }

  ngOnInit(): void { }

  // EVENTS

  /**
   * Button onclick event
   */
  public onLogoutClick(): void {
    this._store.dispatch(LoginActions.getLogout());
  }
}
