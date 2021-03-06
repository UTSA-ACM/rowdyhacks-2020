import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";

function ScheduleSection() {
  return (
    <SectionBlock sectionNumber={4} id="schedule">
      {{
        content: () => {
          return (
            <>
              <div>Schedule</div>
              <div>Coming Soon!</div>
            </>
          );
        }
      }}
    </SectionBlock>
  );
}

export default ScheduleSection;
