namespace Enums
{
    [Flags]
    public enum AlgorithmsTitleEnum
    {
        //Pathfinding
        ASTAR = 0,
        DIJKSTRA = 1,
        GREEDY_BREATH_FIRST_SEARCH = 2,
        BREATH_FIRST_SEARCH = 3,
        BREATH_FIRST_SEARCH_BIDIRECTIONAL = 4,
        DEPTH_FIRST_SEARCH = 5,
        SWARM = 6,
        CONVERGENT_SWARM = 7,

        //Sorting
        QUICK_SORT = 8,
        MERGE_SORT = 9,
        HEAP_SORT = 10,
        SHELL_SORT = 11,
        BUBBLE_SORT = 12,
        SELECTION_SORT = 13,
        INSERTION_SORT = 14,
        GNOME_SORT = 15,
        SHAKER_SORT = 16,
        ODD_EVEN_SORT = 17,
        PANCAKE_SORT = 18,
        RADIX_SORT = 19,
        CYCLE_SORT = 20,
        BITONIC_SORT = 21,
        TIM_SORT = 22,
        CUBE_SORT = 23,
        BOGO_SORT = 24,

        //BST
        BST_INORDER = 25,
        BST_PREORDER = 26,
        BST_POSTORDER = 27,

        //PRIME NUMBER
        SIEV = 28

    }
}
