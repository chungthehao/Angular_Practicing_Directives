import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practicing-directives';
  showText = false;
  logArr = [];
  
  toggleShowText() {
  	this.showText = !this.showText;
  	this.logArr.push(this.logArr.length + 1);
  }
}
