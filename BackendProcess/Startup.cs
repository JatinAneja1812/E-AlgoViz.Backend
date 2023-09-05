using AlgorithmsVisualizer.Repository.Classes;
using AlgorithmsVisualizer.Repository.Interfaces;
using AlgorithmsVisualizer.Services.Classes;
using AlgorithmsVisualizer.Services.Classes.PathfindingAlgorithms.Interfaces;
using AlgorithmsVisualizer.Services.Interfaces;
using AlgorithmsVisualizer.Services.Interfaces.PathfindingAlgorithms.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using VisualizerDatabase.VisualizerContext;

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

            services.AddTransient<IDijkstraAlgoService, DijkstraAlgoService>();
            services.AddTransient<IAlgorithmsInfo, AlgorithmsInfo>();
            services.AddTransient<IAlgorithmsInfoRepo, AlgorithmsInfoRepo>();

            //services.AddAutoMapper(typeof(UserConfigurationProfile));

            services.AddDbContext<VisContext>();

            using (VisContext dbContext = new VisContext())
            {
                dbContext.Database.EnsureCreated();
            }

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
