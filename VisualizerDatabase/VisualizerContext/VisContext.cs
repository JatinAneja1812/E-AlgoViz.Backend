using DataModels;
using Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Diagnostics;

namespace VisualizerDatabase.VisualizerContext
{
    public class VisContext : DbContext
    {
        public VisContext() : base()
        {
        }

        public VisContext(DbContextOptions<VisContext> options)
        : base(options)
        { }

        public virtual DbSet<Algorithm> AlgorithmsData { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLoggerFactory(LoggerFactory.Create(builder =>
            {
                builder.AddFilter(_ => false);
            }));

            EventLog.WriteEntry("AlgorithmsVisualizer", "Database being initialised at: " + AppDomain.CurrentDomain.BaseDirectory + @"VisualizerDatabase.sqlite", EventLogEntryType.Information);
            optionsBuilder.UseSqlite("Data Source=" + AppDomain.CurrentDomain.BaseDirectory + @"VisualizerDatabase.sqlite");

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Algorithm>().HasKey(algo => algo.AlgorithmsID);

            builder.Entity<Algorithm>().HasData(
               new Algorithm { AlgorithmsID = "PFA1", AlgorithmsTitle = AlgorithmsTitleEnum.ASTAR, AlgorithmsType = AlgorithmsTypeEnum.PATHFINDING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "PFA2", AlgorithmsTitle = AlgorithmsTitleEnum.DIJKSTRA, AlgorithmsType = AlgorithmsTypeEnum.PATHFINDING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "PFA3", AlgorithmsTitle = AlgorithmsTitleEnum.GREEDY_BREATH_FIRST_SEARCH, AlgorithmsType = AlgorithmsTypeEnum.PATHFINDING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "PFA4", AlgorithmsTitle = AlgorithmsTitleEnum.BREATH_FIRST_SEARCH, AlgorithmsType = AlgorithmsTypeEnum.PATHFINDING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "PFA5", AlgorithmsTitle = AlgorithmsTitleEnum.DEPTH_FIRST_SEARCH, AlgorithmsType = AlgorithmsTypeEnum.PATHFINDING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "PFA6", AlgorithmsTitle = AlgorithmsTitleEnum.BREATH_FIRST_SEARCH_BIDIRECTIONAL, AlgorithmsType = AlgorithmsTypeEnum.PATHFINDING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "PFA7", AlgorithmsTitle = AlgorithmsTitleEnum.SWARM, AlgorithmsType = AlgorithmsTypeEnum.PATHFINDING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "PFA8", AlgorithmsTitle = AlgorithmsTitleEnum.CONVERGENT_SWARM, AlgorithmsType = AlgorithmsTypeEnum.PATHFINDING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "SA1", AlgorithmsTitle = AlgorithmsTitleEnum.QUICK_SORT, AlgorithmsType = AlgorithmsTypeEnum.SORTING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "SA2", AlgorithmsTitle = AlgorithmsTitleEnum.MERGE_SORT, AlgorithmsType = AlgorithmsTypeEnum.SORTING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "SA3", AlgorithmsTitle = AlgorithmsTitleEnum.HEAP_SORT, AlgorithmsType = AlgorithmsTypeEnum.SORTING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "SA4", AlgorithmsTitle = AlgorithmsTitleEnum.SHELL_SORT, AlgorithmsType = AlgorithmsTypeEnum.SORTING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "SA5", AlgorithmsTitle = AlgorithmsTitleEnum.BUBBLE_SORT, AlgorithmsType = AlgorithmsTypeEnum.SORTING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "SA6", AlgorithmsTitle = AlgorithmsTitleEnum.SELECTION_SORT, AlgorithmsType = AlgorithmsTypeEnum.SORTING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "SA7", AlgorithmsTitle = AlgorithmsTitleEnum.INSERTION_SORT, AlgorithmsType = AlgorithmsTypeEnum.SORTING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "SA8", AlgorithmsTitle = AlgorithmsTitleEnum.GNOME_SORT, AlgorithmsType = AlgorithmsTypeEnum.SORTING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "SA9", AlgorithmsTitle = AlgorithmsTitleEnum.SHAKER_SORT, AlgorithmsType = AlgorithmsTypeEnum.SORTING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "SA10", AlgorithmsTitle = AlgorithmsTitleEnum.ODD_EVEN_SORT, AlgorithmsType = AlgorithmsTypeEnum.SORTING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "SA11", AlgorithmsTitle = AlgorithmsTitleEnum.PANCAKE_SORT, AlgorithmsType = AlgorithmsTypeEnum.SORTING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "SA12", AlgorithmsTitle = AlgorithmsTitleEnum.RADIX_SORT, AlgorithmsType = AlgorithmsTypeEnum.SORTING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "SA13", AlgorithmsTitle = AlgorithmsTitleEnum.CYCLE_SORT, AlgorithmsType = AlgorithmsTypeEnum.SORTING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "SA14", AlgorithmsTitle = AlgorithmsTitleEnum.BITONIC_SORT, AlgorithmsType = AlgorithmsTypeEnum.SORTING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "SA15", AlgorithmsTitle = AlgorithmsTitleEnum.TIM_SORT, AlgorithmsType = AlgorithmsTypeEnum.SORTING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "SA16", AlgorithmsTitle = AlgorithmsTitleEnum.CUBE_SORT, AlgorithmsType = AlgorithmsTypeEnum.SORTING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "SA17", AlgorithmsTitle = AlgorithmsTitleEnum.BOGO_SORT, AlgorithmsType = AlgorithmsTypeEnum.SORTING_ALGORITHMS },
               new Algorithm { AlgorithmsID = "BST1", AlgorithmsTitle = AlgorithmsTitleEnum.BST_INORDER, AlgorithmsType = AlgorithmsTypeEnum.BINARY_SEARCH_TREE_ALGORITHMS },
               new Algorithm { AlgorithmsID = "BST2", AlgorithmsTitle = AlgorithmsTitleEnum.BST_PREORDER, AlgorithmsType = AlgorithmsTypeEnum.BINARY_SEARCH_TREE_ALGORITHMS },
               new Algorithm { AlgorithmsID = "BST3", AlgorithmsTitle = AlgorithmsTitleEnum.BST_POSTORDER, AlgorithmsType = AlgorithmsTypeEnum.BINARY_SEARCH_TREE_ALGORITHMS },
               new Algorithm { AlgorithmsID = "PNA1", AlgorithmsTitle = AlgorithmsTitleEnum.SIEV, AlgorithmsType = AlgorithmsTypeEnum.PRIME_NUMBER_SEARCH_ALGORITHMS }
           );
        }
    }
}