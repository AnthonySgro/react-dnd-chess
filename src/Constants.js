
var Constants = {};

Constants.ItemTypes = {
    PIECE: 'chesspiece'
};

Constants.PieceColors = {
    WHITE: 'White',
    BLACK: 'Black'
};

Constants.PieceTypes = {
    PAWN: 'pawn',
    KNIGHT: 'knight',
    ROOK: 'rook',
    BISHOP: 'bishop',
    QUEEN: 'queen',
    KING: 'king'
};

Constants.PieceStrings = {
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

Constants.DragSources = {
    collect: function (connect, monitor) {
        return {
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging()
        }
    },
    PIECE: {
        beginDrag: function (props, connect, monitor) {
            return { 
                id: props.id,
                board: props.board
            };
        }
    }
};

Constants.DropTargets = {
    collect: function (connect, monitor) {
        return {
            connectDropTarget: connect.dropTarget(),
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }
    },
    SQUARE: {
        canDrop: function(props, monitor) {
            var item = monitor.getItem();
            return item.board.pieceCanMoveTo(item.id, props.x, props.y);
        },
        drop: function (props, monitor) {
            var item = monitor.getItem();
            item.board.movePieceTo(item.id, props.x, props.y);
        }
    }
};

Constants.PieceStartingPositions = {
    // White backline pieces
    'wR1': {
        x: 0, y: 7,
        color: Constants.PieceColors.WHITE,
        pieceType: Constants.PieceTypes.ROOK,
        pieceString: Constants.PieceStrings.WHITE_ROOK
    },
    'wN1': {
        x: 1, y: 7,
        color: Constants.PieceColors.WHITE,
        pieceType: Constants.PieceTypes.KNIGHT,
        pieceString: Constants.PieceStrings.WHITE_KNIGHT
    },
    'wB1': {
        x: 2, y: 7,
        color: Constants.PieceColors.WHITE,
        pieceType: Constants.PieceTypes.BISHOP,
        pieceString: Constants.PieceStrings.WHITE_BISHOP
    },
    'wQ': {
        x: 3, y: 7,
        color: Constants.PieceColors.WHITE,
        pieceType: Constants.PieceTypes.QUEEN,
        pieceString: Constants.PieceStrings.WHITE_QUEEN
    },
    'wK': {
        x: 4, y: 7,
        color: Constants.PieceColors.WHITE,
        pieceType: Constants.PieceTypes.KING,
        pieceString: Constants.PieceStrings.WHITE_KING
    },
    'wB2': {
        x: 5, y: 7,
        color: Constants.PieceColors.WHITE,
        pieceType: Constants.PieceTypes.BISHOP,
        pieceString: Constants.PieceStrings.WHITE_BISHOP
    },
    'wN2': {
        x: 6, y: 7,
        color: Constants.PieceColors.WHITE,
        pieceType: Constants.PieceTypes.KNIGHT,
        pieceString: Constants.PieceStrings.WHITE_KNIGHT
    },
    'wR2': {
        x: 7, y: 7,
        color: Constants.PieceColors.WHITE,
        pieceType: Constants.PieceTypes.ROOK,
        pieceString: Constants.PieceStrings.WHITE_ROOK
    },
    // White pawns
    'wp1': {
        x: 0, y: 6,
        color: Constants.PieceColors.WHITE,
        pieceType: Constants.PieceTypes.PAWN,
        pieceString: Constants.PieceStrings.WHITE_PAWN
    },
    'wp2': {
        x: 1, y: 6,
        color: Constants.PieceColors.WHITE,
        pieceType: Constants.PieceTypes.PAWN,
        pieceString: Constants.PieceStrings.WHITE_PAWN
    },
    'wp3': {
        x: 2, y: 6,
        color: Constants.PieceColors.WHITE,
        pieceType: Constants.PieceTypes.PAWN,
        pieceString: Constants.PieceStrings.WHITE_PAWN
    },
    'wp4': {
        x: 3, y: 6,
        color: Constants.PieceColors.WHITE,
        pieceType: Constants.PieceTypes.PAWN,
        pieceString: Constants.PieceStrings.WHITE_PAWN
    },
    'wp5': {
        x: 4, y: 6,
        color: Constants.PieceColors.WHITE,
        pieceType: Constants.PieceTypes.PAWN,
        pieceString: Constants.PieceStrings.WHITE_PAWN
    },
    'wp6': {
        x: 5, y: 6,
        color: Constants.PieceColors.WHITE,
        pieceType: Constants.PieceTypes.PAWN,
        pieceString: Constants.PieceStrings.WHITE_PAWN
    },
    'wp7': {
        x: 6, y: 6,
        color: Constants.PieceColors.WHITE,
        pieceType: Constants.PieceTypes.PAWN,
        pieceString: Constants.PieceStrings.WHITE_PAWN
    },
    'wp8': {
        x: 7, y: 6,
        color: Constants.PieceColors.WHITE,
        pieceType: Constants.PieceTypes.PAWN,
        pieceString: Constants.PieceStrings.WHITE_PAWN
    },
    
    // Black backline pieces
    'bR1': {
        x: 0, y: 0,
        color: Constants.PieceColors.BLACK,
        pieceType: Constants.PieceTypes.ROOK,
        pieceString: Constants.PieceStrings.BLACK_ROOK
    },
    'bN1': {
        x: 1, y: 0,
        color: Constants.PieceColors.BLACK,
        pieceType: Constants.PieceTypes.KNIGHT,
        pieceString: Constants.PieceStrings.BLACK_KNIGHT
    },
    'bB1': {
        x: 2, y: 0,
        color: Constants.PieceColors.BLACK,
        pieceType: Constants.PieceTypes.BISHOP,
        pieceString: Constants.PieceStrings.BLACK_BISHOP
    },
    'bQ': {
        x: 3, y: 0,
        color: Constants.PieceColors.BLACK,
        pieceType: Constants.PieceTypes.QUEEN,
        pieceString: Constants.PieceStrings.BLACK_QUEEN
    },
    'bK': {
        x: 4, y: 0,
        color: Constants.PieceColors.BLACK,
        pieceType: Constants.PieceTypes.KING,
        pieceString: Constants.PieceStrings.BLACK_KING
    },
    'bB2': {
        x: 5, y: 0,
        color: Constants.PieceColors.BLACK,
        pieceType: Constants.PieceTypes.BISHOP,
        pieceString: Constants.PieceStrings.BLACK_BISHOP
    },
    'bN2': {
        x: 6, y: 0,
        color: Constants.PieceColors.BLACK,
        pieceType: Constants.PieceTypes.KNIGHT,
        pieceString: Constants.PieceStrings.BLACK_KNIGHT
    },
    'bR2': {
        x: 7, y: 0,
        color: Constants.PieceColors.BLACK,
        pieceType: Constants.PieceTypes.ROOK,
        pieceString: Constants.PieceStrings.BLACK_ROOK
    },
    // Black pawns
    'bp1': {
        x: 0, y: 1,
        color: Constants.PieceColors.BLACK,
        pieceType: Constants.PieceTypes.PAWN,
        pieceString: Constants.PieceStrings.BLACK_PAWN
    },
    'bp2': {
        x: 1, y: 1,
        color: Constants.PieceColors.BLACK,
        pieceType: Constants.PieceTypes.PAWN,
        pieceString: Constants.PieceStrings.BLACK_PAWN
    },
    'bp3': {
        x: 2, y: 1,
        color: Constants.PieceColors.BLACK,
        pieceType: Constants.PieceTypes.PAWN,
        pieceString: Constants.PieceStrings.BLACK_PAWN
    },
    'bp4': {
        x: 3, y: 1,
        color: Constants.PieceColors.BLACK,
        pieceType: Constants.PieceTypes.PAWN,
        pieceString: Constants.PieceStrings.BLACK_PAWN
    },
    'bp5': {
        x: 4, y: 1,
        color: Constants.PieceColors.BLACK,
        pieceType: Constants.PieceTypes.PAWN,
        pieceString: Constants.PieceStrings.BLACK_PAWN
    },
    'bp6': {
        x: 5, y: 1,
        color: Constants.PieceColors.BLACK,
        pieceType: Constants.PieceTypes.PAWN,
        pieceString: Constants.PieceStrings.BLACK_PAWN
    },
    'bp7': {
        x: 6, y: 1,
        color: Constants.PieceColors.BLACK,
        pieceType: Constants.PieceTypes.PAWN,
        pieceString: Constants.PieceStrings.BLACK_PAWN
    },
    'bp8': {
        x: 7, y: 1,
        color: Constants.PieceColors.BLACK,
        pieceType: Constants.PieceTypes.PAWN,
        pieceString: Constants.PieceStrings.BLACK_PAWN
    }
};

module.exports = Constants;