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
  servers = ['Test'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }
  updateServerStatus() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    console.log(this.servers);

    // this.serverStatus = "server was created with name = " + this.serverName;
  }


}
