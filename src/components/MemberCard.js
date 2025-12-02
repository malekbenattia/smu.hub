function MemberCard({ member }) {
  return (
    <div style={{ border: "1px solid #aaa", padding: 15, margin: 10 }}>
      <h3>{member.name}</h3>
      <p>Role: {member.role}</p>
    </div>
  );
}

export default MemberCard;
