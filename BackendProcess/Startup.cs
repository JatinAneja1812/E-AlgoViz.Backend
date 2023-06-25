using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace BackendProcess
{
    public class Startup
    {

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder =>
                    {
                        builder
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                    }
                );
            });

            // services.AddTransient<IPowershellUtility, PowershellUtility.PowershellUtility>();


            //services.AddAutoMapper(typeof(UserConfigurationProfile));
            //services.AddDbContext<SentinelCollectorContext>();

            //using (SentinelCollectorContext dbContext = new SentinelCollectorContext())
            //{
            //    dbContext.Database.Migrate();
            //    //dbContext.Database.EnsureCreated();
            //}

            services.AddControllers();
        }

        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
            app.UseRouting();

            app.UseCors("CorsPolicy");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

    }
}
