import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  serverStatus = 'offline';
  allowNewServer = false;
  serverName = "";
  serverCreated = false;
  setColor = "";
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

  }
  updateServerStatus() {
    this.serverCreated = true;
    // this.serverStatus = "server was created with name = " + this.serverName;
  }
  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
