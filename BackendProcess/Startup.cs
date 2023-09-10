using AlgorithmsVisualizer.Repository.Classes;
using AlgorithmsVisualizer.Repository.Interfaces;
using AlgorithmsVisualizer.Service.Classes;
using AlgorithmsVisualizer.Service.Classes.PathfindingAlgorithms;
using AlgorithmsVisualizer.Service.Classes.SortingAlgorithms;
using AlgorithmsVisualizer.Service.Interfaces;
using AlgorithmsVisualizer.Service.Utilities;
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
            services.AddTransient<IAlgorithmsInfoRepo, AlgorithmsInfoRepo>();

            services.AddTransient<DijkstraAlgoService>();
            services.AddTransient<AStarAlgoService>();
            services.AddTransient<DepthFirstSearchAlgoService>();
            services.AddTransient<GreedyBFSAlgoService>();
            services.AddTransient<BreadthFirstSearchAlgoService>();
            services.AddTransient<SwarmAlgoService>();
            services.AddTransient<ConvergentSwarmAlgoService>();

            services.AddSingleton<IPathfindingAlgorithmFactory, PathfindingAlgorithmFactory>();

            services.AddTransient<QuickSortAlgoService>();

            services.AddSingleton<ISortingAlgorithmFactory, SortingAlgorithmFactory>();

            //services.AddAutoMapper(typeof());

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
