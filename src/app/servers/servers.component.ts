import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-servers',
  templateUrl: '../servers/servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was ceared!';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

}
