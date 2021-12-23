import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cypress-debugger';

  ngOnInit() {
    let a = 0;
    console.log(a++);
    console.log(a++);
    console.log(a++);
    console.log(a++);
    console.log(a++);
    console.log(a++);
    console.log(a++);
    console.log(a++);
    console.log(a++);
    console.log(a++);
    console.log(a++);
    console.log(a++);
    console.log(a++);
    console.log(a++);
    console.log(a++);
  }
}
