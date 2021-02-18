import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bangunRuangCalc';
  bangunRuang = 'Balok';
  luas = 0;
  volume = 0;
  p = 0;
  l = 0;
  t = 0;
  s = 0;

  hitungBalok(): void {
    this.volume = this.p * this.l * this.t;
    this.luas = this.luasPersegi(this.p, this.l) + this.luasPersegi(this.p, this.t) + this.luasPersegi(this.l, this.t);
  }

  hitungKubus(): void {
    this.volume = this.s * this.s * this.s;
    this.luas = 6 * this.luasPersegi(this.s, this.s);
  }

  luasPersegi(a: number, b: number): number {
    return a * b;
  }
}
