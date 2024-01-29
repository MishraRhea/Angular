import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  serverStatus = "No server created";
  allowNewServer = false;
  serverName = ""
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }
  updateServerStatus() {
    this.serverStatus = "server was created with name = " + this.serverName;
  }


}
