using Enums;
using System.ComponentModel.DataAnnotations;

namespace DataModels
{
    public class Algorithm
    {
        [Key]
        public string? AlgorithmsID { get; set; }

        public AlgorithmsTypeEnum AlgorithmsType { get; set; }

        public AlgorithmsTitleEnum AlgorithmsTitle { get; set; }

    }
}
