using AlgorithmsVisualizer.Repository.Classes;
using AlgorithmsVisualizer.Repository.Interfaces;
using AlgorithmsVisualizer.Service.Classes;
using AlgorithmsVisualizer.Service.Classes.PathfindingAlgorithms;
using AlgorithmsVisualizer.Service.Interfaces;
using AlgorithmsVisualizer.Service.Interfaces.PathfindingAlgorithms;
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

            services.AddTransient<IAlgorithmsInfo, AlgorithmsInfo>();

            services.AddTransient<IDijkstraAlgoService, DijkstraAlgoService>();
            services.AddTransient<IAStarAlgoService, AStarAlgoService>();
            services.AddTransient<IAlgorithmsInfoRepo, AlgorithmsInfoRepo>();
            services.AddTransient<IDepthFirstSearchAlgoService, DepthFirstSearchAlgoService>();
            services.AddTransient<IGreedyBFSAlgoService, GreedyBFSAlgoService>();
            services.AddTransient<IBreadthFirstSearchAlgoService, BreadthFirstSearchAlgoService>();
            services.AddTransient<ISwarmAlgoService, SwarmAlgoService>();
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
