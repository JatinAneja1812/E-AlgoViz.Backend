
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;


namespace BackendProcess
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
            .UseKestrel()
            .UseUrls("http://*:8080")
            .UseStartup<Startup>()
            .Build();

            host.Run();
        }
    }
}