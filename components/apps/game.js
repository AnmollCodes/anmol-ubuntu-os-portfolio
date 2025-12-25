import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winnerData, setWinnerData] = useState(null); // { winner: 'X', line: [0, 1, 2] }

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], line: lines[i] };
            }
        }
        return null;
    };

    const handleClick = (i) => {
        if (winnerData || board[i]) return;
        const newBoard = [...board];
        newBoard[i] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    };

    useEffect(() => {
        const result = calculateWinner(board);
        if (result) {
            setWinnerData(result);
            triggerConfetti();
        }
    }, [board]);

    const triggerConfetti = () => {
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
        setWinnerData(null);
    }

    let status;
    if (winnerData) {
        status = `Winner: ${winnerData.winner} 🎉`;
    } else if (!board.includes(null)) {
        status = "It's a Draw!";
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className="flex flex-col items-center justify-center h-full bg-gray-900 text-white font-ubuntu select-none">
            <h2 className="text-3xl mb-6 font-bold tracking-wider text-ub-orange animate-pulse">Tic Tac Toe</h2>

            <div className={`mb-6 text-2xl font-bold px-6 py-2 rounded-full ${winnerData ? 'bg-green-600 animate-bounce' : 'bg-gray-700'}`}>
                {status}
            </div>

            <div className="relative grid grid-cols-3 gap-3 p-4 bg-gray-800 rounded-xl shadow-2xl">
                {board.map((square, i) => {
                    const isWinningSquare = winnerData?.line?.includes(i);
                    return (
                        <button
                            key={i}
                            className={`w-20 h-20 sm:w-24 sm:h-24 text-5xl font-bold rounded-lg focus:outline-none transition-all duration-300 transform 
                                ${square ? 'scale-100' : 'scale-95 hover:scale-100 hover:bg-gray-600'}
                                ${isWinningSquare ? 'bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.8)] z-10' : 'bg-gray-700 text-gray-200'}
                            `}
                            onClick={() => handleClick(i)}
                        >
                            <span className={isWinningSquare ? 'animate-ping inline-flex absolute w-full h-full rounded-full opacity-75 bg-green-400' : 'hidden'}></span>
                            <span className="relative">{square}</span>
                        </button>
                    )
                })}

                {/* Visual Line Trace (Optional, usually grid highlighting is cleaner, but here is a simple SVG overlay if needed) */}
                {winnerData && (
                    <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
                        {/* You can add an SVG line here if strict "line trace" is needed, but highlighting cells is usually better for responsiveness. */}
                    </div>
                )}
            </div>

            <button
                onClick={resetGame}
                className="mt-8 px-8 py-3 bg-ub-orange hover:bg-orange-700 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
                Start New Game
            </button>
        </div>
    );
}

export const displayTicTacToe = () => {
    return <TicTacToe />;
}
