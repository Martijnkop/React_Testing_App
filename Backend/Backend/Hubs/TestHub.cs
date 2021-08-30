using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace Backend.Hubs
{
    public class TestHub : Hub<ITestClient>
    {
        public async Task SendMessage(string msg)
        {
            await Clients.Caller.ReturnMessage(msg);
        }
    }
}
