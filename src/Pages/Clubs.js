import React from "react";
import ClubCard from "../components/ClubCard";
import clubs from "../Data/Clubs";

function Clubs() {
  return (
    <div>
      <h1>Clubs</h1>
      {clubs.map((club) => (
        <ClubCard key={club.id} club={club} />
      ))}
    </div>
  );
}

export default Clubs;
