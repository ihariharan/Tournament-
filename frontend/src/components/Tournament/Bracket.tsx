import React from 'react';

const Bracket = ({ matches }) => {
    return (
        <div className="bracket">
            {matches.map((match, index) => (
                <div key={index} className="match">
                    <div className="match-details">
                        <span>{match.teamA}</span> vs <span>{match.teamB}</span>
                    </div>
                    <div className="match-status">
                        {match.status}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Bracket;