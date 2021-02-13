export type SegmentType = "vertical" | "horizontal" | "diagonaltr" | "diagonaltl" | "diagonalbr" | "diagonalbl" | "horizontal0.5";

export const Segments: Record<string, [[number, number], SegmentType][]> = {
    "7": [
        [[ 0,      -1], "horizontal"],
        [[ 0.5,  -0.5],   "vertical"],
        [[ 0.5,   0.5],   "vertical"],
        [[ 0,       1], "horizontal"],
        [[-0.5,   0.5],   "vertical"],
        [[-0.5,  -0.5],   "vertical"],
        [[ 0,       0], "horizontal"]
    ],
    "9": [
        [[0,       -1],   "horizontal"],
        [[0.5,   -0.5],     "vertical"],
        [[0.5,    0.5],     "vertical"],
        [[0,        1],   "horizontal"],
        [[-0.5,   0.5],     "vertical"],
        [[-0.5,  -0.5],     "vertical"],
        [[0,        0],   "horizontal"],
        [[0.25,  -0.5],   "diagonaltr"],
        [[-0.25,  0.5],   "diagonalbl"]
    ],
    "14": [
        [[0,        -1],     "horizontal"],
        [[0.5,    -0.5],       "vertical"],
        [[0.5,     0.5],       "vertical"],
        [[0,         1],     "horizontal"],
        [[-0.5,    0.5],       "vertical"],
        [[-0.5,   -0.5],       "vertical"],
        [[-0.25,     0],  "horizontal0.5"],
        [[0.25,      0],  "horizontal0.5"],
        [[0,      -0.5],       "vertical"],
        [[0,       0.5],       "vertical"],
        [[0.25,  -0.5],      "diagonaltr"],
        [[-0.25, -0.5],      "diagonaltl"],
        [[-0.25,  0.5],      "diagonalbl"],
        [[0.25,   0.5],      "diagonalbr"]
    ],
    "16": [
        [[-0.25,    -1],  "horizontal0.5"],
        [[0.25,     -1],  "horizontal0.5"],
        [[0.5,    -0.5],       "vertical"],
        [[0.5,     0.5],       "vertical"],
        [[0.25,      1],  "horizontal0.5"],
        [[-0.25,     1],  "horizontal0.5"],
        [[-0.5,    0.5],       "vertical"],
        [[-0.5,   -0.5],       "vertical"],
        [[-0.25,     0],  "horizontal0.5"],
        [[0.25,      0],  "horizontal0.5"],
        [[0,      -0.5],       "vertical"],
        [[0,       0.5],       "vertical"],
        [[0.25,  -0.5],      "diagonaltr"],
        [[-0.25, -0.5],      "diagonaltl"],
        [[-0.25,  0.5],      "diagonalbl"],
        [[0.25,   0.5],      "diagonalbr"]
    ]
}