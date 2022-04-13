import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-music';

  time: string = '';
  count: Observable<number> = new Observable<number>();

  constructor() {
    this.count = interval(1000);

    const interval$ = this.count.pipe(
      map((num: number) => {
        const hours = Math.floor(num / 3600);
        const minutes = Math.floor(num / 60);

        return `${hours}h${minutes - hours * 60}min${num - minutes * 60}s`;
      }),
      take(12 * 60 * 3)
    );
    interval$.subscribe((num) => (this.time = num));
  }
}
