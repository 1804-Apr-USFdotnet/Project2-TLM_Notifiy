﻿using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Cors;

[assembly: OwinStartup(typeof(NotifyWebApi.Startup))]

namespace NotifyWebApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCors(CorsOptions.AllowAll);
            ConfigureAuth(app);
        }
    }
}
