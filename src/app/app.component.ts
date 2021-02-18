import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bangunRuangCalc';
  bangunRuang = 'Balok';
  solusi = '';
  luas = 0;
  volume = 0;
  p = 0;
  l = 0;
  t = 0;
  s = 0;

  hitungBalok(): void {
    this.volume = this.p * this.l * this.t;
    this.luas = 2 * this.luasPersegi(this.p, this.l) + 2 * this.luasPersegi(this.p, this.t) + 2 * this.luasPersegi(this.l, this.t);
    let solusiLuas = `L = 2 x (p x l) + 2 x (p x t) + 2 x (l x t)\nL = 2 x (${this.p} x ${this.l}) + 2 x (${this.p} x ${this.t}) + 2 x (${this.l} x ${this.t})\nL = ${this.luas}`;
    let solusiVolume = `V = p x l x t\nV = ${this.p} x ${this.l} ${this.t}\nV = ${this.volume}`;
    this.solusi = `${solusiVolume}\n=======================================\n${solusiLuas}`;
  }

  hitungKubus(): void {
    this.volume = this.s * this.s * this.s;
    this.luas = 6 * this.luasPersegi(this.s, this.s);
    let solusiLuas = `L = 6 x (s x s)\nL = 6 x (${this.s} x ${this.s})\nL = ${this.luas}`;
    let solusiVolume = `V = s x s x s\nV = ${this.s} x ${this.s} ${this.s}\nV = ${this.volume}`;
    this.solusi = `${solusiVolume}\n=======================================\n${solusiLuas}`;
  }

  luasPersegi(a: number, b: number): number {
    return a * b;
  }
}
