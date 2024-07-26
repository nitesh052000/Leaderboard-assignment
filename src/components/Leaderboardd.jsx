import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Leaderboardd = () => {
  const initialPlayers = [
    { userID: "u-1", displayName: "Jone", picture: "", score: 15700 },
    { userID: "u-2", displayName: "Victoria", picture: "", score: 15701 },
    { userID: "u-3", displayName: "Joy", picture: "", score: 15800 },
    { userID: "u-4", displayName: "Quinn", picture: "", score: 15720 },
    { userID: "u-5", displayName: "Sheenalo", picture: "", score: 15644 },
    { userID: "u-6", displayName: "Charlene", picture: "", score: 15437 },
    { userID: "u-7", displayName: "LeonaBaby", picture: "", score: 15455 },
    { userID: "u-8", displayName: "Sunny", picture: "", score: 15600 },
    { userID: "u-9", displayName: "ImWord", picture: "", score: 15456 },
    { userID: "u-10", displayName: "Dophine", picture: "", score: 15433 },
  ];

  const [players, setPlayers] = useState(initialPlayers);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedplayer = players?.map((player) => ({
        ...player,
        score: player?.score + Math.floor(Math.random() * 100),
      }));

      setPlayers(updatedplayer.sort((a, b) => b.score - a.score));
    }, 1000);

    return () => clearInterval(interval);
  }, [players]);

  return (
    <Container>
      <Title>Leaderboard</Title>
      {players ? (
        <PlayerList>
          {players.map((c) => (
            <PlayerItem key={c?.userID}>
              <PlayerInfo>
                <PlayerName>{c?.displayName}</PlayerName>
                <PlayerScore>{c?.score}</PlayerScore>
              </PlayerInfo>
            </PlayerItem>
          ))}
        </PlayerList>
      ) : (
        <h1>Loading</h1>
      )}
    </Container>
  );
};

export default Leaderboardd;

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const PlayerList = styled.div``;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PlayerItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: ${(props) => (props.index % 2 === 0 ? "#fff" : "#e0e0e0")};
  margin-bottom: 5px;
  animation: ${fadeIn} 0.5s ease-in-out;
  transition: transform 0.5s;
`;

const PlayerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const PlayerName = styled.span`
  font-weight: bold;
`;

const PlayerScore = styled.span`
  font-size: 1.2em;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
