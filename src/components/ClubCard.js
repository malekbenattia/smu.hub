function ClubCard({ club }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 15, margin: 10 }}>
      <h2>{club.name}</h2>
      <p><strong>Category:</strong> {club.category}</p>
      <p>{club.description}</p>
    </div>
  );
}

export default ClubCard;
