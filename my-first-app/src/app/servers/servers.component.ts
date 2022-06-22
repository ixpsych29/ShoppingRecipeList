import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',

  // selector as class==>
  // selector: '.app-servers',
  // selector as attribute==>
  // selector: '[app-servers]',

  templateUrl: './servers.component.html',
  //inline template==>
  //template: `<app-server></app-server><app-server></app-server>` ,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'Server not Created';
  serverName = 'Shappar Server';
  serverCreated = false;
  servers = ['testServerA','testServerB'];
  // username = '';

  constructor() {
    setTimeout(() => {this.allowNewServer = true}, 2500);
  }

  ngOnInit(): void {
  }

  onServerCreate(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created! '+ this.serverName;
  }

  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
