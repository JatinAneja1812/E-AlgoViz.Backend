
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;


namespace BackendProcess
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureServices((hostContext, services) =>
                {
                    services.Configure<ConsoleLifetimeOptions>(opts => opts.SuppressStatusMessages = true);
                    services.AddHostedService<BackendWorker>();

                   // services.AddTransient<IPowershellUtility, PowershellUtility.PowershellUtility>();


                    //services.AddAutoMapper(typeof(UserConfigurationProfile));
                    //services.AddDbContext<SentinelCollectorContext>();

                    //using (SentinelCollectorContext dbContext = new SentinelCollectorContext())
                    //{
                    //    //dbContext.Database.Migrate();
                    //    dbContext.Database.EnsureCreated();
                    //}
                });
    }
}