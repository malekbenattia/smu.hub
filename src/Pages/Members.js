import MemberCard from "src/components/MemberCard";
import { members } from "src/data/members";

function Members() {
  return (
    <div>
      <h1>Members</h1>
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}

export default Members;
