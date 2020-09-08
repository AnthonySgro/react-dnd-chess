
export const BoardCoordinates = {
  x: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  y: [8, 7, 6, 5, 4, 3, 2, 1]
};

export const ItemTypes = {
    PIECE: 'chesspiece'
};

export const PieceColors = {
    WHITE: 'White',
    BLACK: 'Black'
};

export const PieceTypes = {
    PAWN: 'pawn',
    KNIGHT: 'knight',
    ROOK: 'rook',
    BISHOP: 'bishop',
    QUEEN: 'queen',
    KING: 'king'
};

export const PieceStrings = {
    BLACK_PAWN: '♟',
    BLACK_ROOK: '♜',
    BLACK_KNIGHT: '♞',
    BLACK_BISHOP: '♝',
    BLACK_QUEEN: '♛',
    BLACK_KING: '♚',
    WHITE_PAWN: '♙',
    WHITE_ROOK: '♖',
    WHITE_KNIGHT: '♘',
    WHITE_BISHOP: '♗',
    WHITE_QUEEN: '♕',
    WHITE_KING: '♔'
};

export const PieceStartingPositions = {
    // White backline pieces
    'wR1': {
        x: 0, y: 7,
        color: PieceColors.WHITE,
        pieceType: PieceTypes.ROOK,
        pieceString: PieceStrings.WHITE_ROOK
    },
    'wN1': {
        x: 1, y: 7,
        color: PieceColors.WHITE,
        pieceType: PieceTypes.KNIGHT,
        pieceString: PieceStrings.WHITE_KNIGHT
    },
    'wB1': {
        x: 2, y: 7,
        color: PieceColors.WHITE,
        pieceType: PieceTypes.BISHOP,
        pieceString: PieceStrings.WHITE_BISHOP
    },
    'wQ': {
        x: 3, y: 7,
        color: PieceColors.WHITE,
        pieceType: PieceTypes.QUEEN,
        pieceString: PieceStrings.WHITE_QUEEN
    },
    'wK': {
        x: 4, y: 7,
        color: PieceColors.WHITE,
        pieceType: PieceTypes.KING,
        pieceString: PieceStrings.WHITE_KING
    },
    'wB2': {
        x: 5, y: 7,
        color: PieceColors.WHITE,
        pieceType: PieceTypes.BISHOP,
        pieceString: PieceStrings.WHITE_BISHOP
    },
    'wN2': {
        x: 6, y: 7,
        color: PieceColors.WHITE,
        pieceType: PieceTypes.KNIGHT,
        pieceString: PieceStrings.WHITE_KNIGHT
    },
    'wR2': {
        x: 7, y: 7,
        color: PieceColors.WHITE,
        pieceType: PieceTypes.ROOK,
        pieceString: PieceStrings.WHITE_ROOK
    },
    // White pawns
    'wp1': {
        x: 0, y: 6,
        color: PieceColors.WHITE,
        pieceType: PieceTypes.PAWN,
        pieceString: PieceStrings.WHITE_PAWN
    },
    'wp2': {
        x: 1, y: 6,
        color: PieceColors.WHITE,
        pieceType: PieceTypes.PAWN,
        pieceString: PieceStrings.WHITE_PAWN
    },
    'wp3': {
        x: 2, y: 6,
        color: PieceColors.WHITE,
        pieceType: PieceTypes.PAWN,
        pieceString: PieceStrings.WHITE_PAWN
    },
    'wp4': {
        x: 3, y: 6,
        color: PieceColors.WHITE,
        pieceType: PieceTypes.PAWN,
        pieceString: PieceStrings.WHITE_PAWN
    },
    'wp5': {
        x: 4, y: 6,
        color: PieceColors.WHITE,
        pieceType: PieceTypes.PAWN,
        pieceString: PieceStrings.WHITE_PAWN
    },
    'wp6': {
        x: 5, y: 6,
        color: PieceColors.WHITE,
        pieceType: PieceTypes.PAWN,
        pieceString: PieceStrings.WHITE_PAWN
    },
    'wp7': {
        x: 6, y: 6,
        color: PieceColors.WHITE,
        pieceType: PieceTypes.PAWN,
        pieceString: PieceStrings.WHITE_PAWN
    },
    'wp8': {
        x: 7, y: 6,
        color: PieceColors.WHITE,
        pieceType: PieceTypes.PAWN,
        pieceString: PieceStrings.WHITE_PAWN
    },
    
    // Black backline pieces
    'bR1': {
        x: 0, y: 0,
        color: PieceColors.BLACK,
        pieceType: PieceTypes.ROOK,
        pieceString: PieceStrings.BLACK_ROOK
    },
    'bN1': {
        x: 1, y: 0,
        color: PieceColors.BLACK,
        pieceType: PieceTypes.KNIGHT,
        pieceString: PieceStrings.BLACK_KNIGHT
    },
    'bB1': {
        x: 2, y: 0,
        color: PieceColors.BLACK,
        pieceType: PieceTypes.BISHOP,
        pieceString: PieceStrings.BLACK_BISHOP
    },
    'bQ': {
        x: 3, y: 0,
        color: PieceColors.BLACK,
        pieceType: PieceTypes.QUEEN,
        pieceString: PieceStrings.BLACK_QUEEN
    },
    'bK': {
        x: 4, y: 0,
        color: PieceColors.BLACK,
        pieceType: PieceTypes.KING,
        pieceString: PieceStrings.BLACK_KING
    },
    'bB2': {
        x: 5, y: 0,
        color: PieceColors.BLACK,
        pieceType: PieceTypes.BISHOP,
        pieceString: PieceStrings.BLACK_BISHOP
    },
    'bN2': {
        x: 6, y: 0,
        color: PieceColors.BLACK,
        pieceType: PieceTypes.KNIGHT,
        pieceString: PieceStrings.BLACK_KNIGHT
    },
    'bR2': {
        x: 7, y: 0,
        color: PieceColors.BLACK,
        pieceType: PieceTypes.ROOK,
        pieceString: PieceStrings.BLACK_ROOK
    },
    // Black pawns
    'bp1': {
        x: 0, y: 1,
        color: PieceColors.BLACK,
        pieceType: PieceTypes.PAWN,
        pieceString: PieceStrings.BLACK_PAWN
    },
    'bp2': {
        x: 1, y: 1,
        color: PieceColors.BLACK,
        pieceType: PieceTypes.PAWN,
        pieceString: PieceStrings.BLACK_PAWN
    },
    'bp3': {
        x: 2, y: 1,
        color: PieceColors.BLACK,
        pieceType: PieceTypes.PAWN,
        pieceString: PieceStrings.BLACK_PAWN
    },
    'bp4': {
        x: 3, y: 1,
        color: PieceColors.BLACK,
        pieceType: PieceTypes.PAWN,
        pieceString: PieceStrings.BLACK_PAWN
    },
    'bp5': {
        x: 4, y: 1,
        color: PieceColors.BLACK,
        pieceType: PieceTypes.PAWN,
        pieceString: PieceStrings.BLACK_PAWN
    },
    'bp6': {
        x: 5, y: 1,
        color: PieceColors.BLACK,
        pieceType: PieceTypes.PAWN,
        pieceString: PieceStrings.BLACK_PAWN
    },
    'bp7': {
        x: 6, y: 1,
        color: PieceColors.BLACK,
        pieceType: PieceTypes.PAWN,
        pieceString: PieceStrings.BLACK_PAWN
    },
    'bp8': {
        x: 7, y: 1,
        color: PieceColors.BLACK,
        pieceType: PieceTypes.PAWN,
        pieceString: PieceStrings.BLACK_PAWN
    }
};

export default {
    BoardCoordinates,
    ItemTypes,
    PieceColors,
    PieceTypes,
    PieceStrings,
    PieceStartingPositions
};
