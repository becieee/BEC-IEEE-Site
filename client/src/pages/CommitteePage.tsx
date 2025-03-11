import React, { useState } from 'react';
import MemberCard from '../components/MemberCard';
import PageHeader from '../components/PageHeader';
import CommitteeSelector from '../components/CommitteeSelector';
import { committees } from '../data/committees';

const CommitteePage = () => {
  const [activeCommittee, setActiveCommittee] = useState(committees[0].name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-purple-950 py-6 sm:py-8 px-3 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto">
        <PageHeader />
        <CommitteeSelector
          committees={committees}
          activeCommittee={activeCommittee}
          onSelect={setActiveCommittee}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {committees
            .find((committee) => committee.name === activeCommittee)
            ?.members.map((member) => (
              <MemberCard
                key={member.name}
                image={member.image}
                name={member.name}
                designation={member.designation}
                linkedin={member.linkedin}
                portfolio={member.portfolio}
                email={member.email}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteePage;