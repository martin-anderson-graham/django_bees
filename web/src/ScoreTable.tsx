import React, { useEffect, useState } from 'react';

type Game = {
    date_played: String
    opposing_team_name: String
    opposing_score: String
    brentford_score: String
    brentford_victory: String
}

const ScoreTable: React.FC<{}> = () => {
    const [gamesArray, setGamesArray] = useState([] as Game[])

    useEffect(() => {
        const getGames = async () => {
            let res = await fetch(`/games/`)
            let parsedJSON = await res.json()
            setGamesArray(parsedJSON.games)
        }
        getGames()
    }, [])

    return (
        <div className='games-table'>
            {gamesArray.map((game) => (
                < div className='game-entry' >
                    <p>
                        {game.date_played} - Brentford v {game.opposing_team_name} - ({game.brentford_score} - {game.opposing_score}) - {game.brentford_victory}
                    </p>
                </div>
            ))

            }
        </div >
    )
}

export default ScoreTable;
