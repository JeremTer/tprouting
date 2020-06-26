export class ServersService {
  private servers = [
    {
      id: 0,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 1,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 2,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
