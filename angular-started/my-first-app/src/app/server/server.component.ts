import { Component } from '@angular/core';

@Component({
    'selector': 'app-server',
    'templateUrl': './server.component.html',
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offLine';

    getServerStatus() {
        return this.serverStatus;
    }
}
