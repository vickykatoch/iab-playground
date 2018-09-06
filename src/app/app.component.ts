import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  appCount = 0;
  private appMap = new Map<string, fin.OpenFinApplication>();

  onCreateApps() {
    const app = new fin.desktop.Application({
      name : 'TEST-APP',
      url : 'http://localhost:4200',
      uuid : 'TEST-APP'
    }, (success) => {
      console.info(success);
      app.run((s) => {
        console.info(s);
      }, err => {
        console.error(err);
      })
    }, error => {
      console.error(error);
    });
  }
}
