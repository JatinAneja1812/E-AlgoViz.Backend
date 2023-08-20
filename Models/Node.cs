using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Node
    {
        public int Row { get; set; }
        public int Col { get; set; }
        public int Distance { get; set; }
        public int Heuristic { get; set; }
        public bool IsFinish { get; set; }
        public bool IsMid { get; set; }
        public bool IsShortest { get; set; }
        public bool IsStart { get; set; }
        public bool IsVisited { get; set; }
        public bool IsVisited2 { get; set; }
        public bool IsWall { get; set; }
        public bool IsWeight { get; set; }
        public Node? PreviousNode { get; set; }
        public int src { get; set; }

        public Node(int row, int col)
        {
            Row = row;
            Col = col;
        }

    }

}
