import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { ILoginState, SelectLoginSuccess } from './+state/login';

@Component({
  selector: 'bit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly loginState: Store<ILoginState>,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    this.loginState.select(SelectLoginSuccess).subscribe(async (isSuccess) => {
      if (isSuccess) {
        return;
      }
      await this.router.navigateByUrl('login');
    });
  }
}
