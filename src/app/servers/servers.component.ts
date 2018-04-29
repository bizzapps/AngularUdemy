import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-servers',
  templateUrl: '../servers/servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  userName = '';
  serverCreationStatus = 'No server was ceared!';
  serverName = '';
  serverWasCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverWasCreated = true;
    this.serverCreationStatus = 'Server was created! The server name is: ' + this.serverName;
  }
  onUpdateServer(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUserName() {
    this.userName = '';
  }

}
