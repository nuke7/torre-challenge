"use client";

import {
  BeginnerSvg,
  ExpertSvg,
  InterestedSvg,
  MasterSvg,
  ProficientSvg,
  WeightSvg,
} from "@/assets/AllSvg";
import { useSearchContext } from "@/context/SearchContext";

const Skills = () => {
  const { data } = useSearchContext();

  const master = data.filter((strength) => strength.proficiency === "master");
  const expert = data.filter((strength) => strength.proficiency === "expert");
  const proficient = data.filter(
    (strength) => strength.proficiency === "proficient"
  );
  const beginner = data.filter((strength) => strength.proficiency === "novice");
  const interested = data.filter(
    (strength) => strength.proficiency === "no-experience-interested"
  );

  if (data.length > 0) {
    return (
      <>
        <h1 className="text-lg my-4">Skills and interests: </h1>
        {master.length > 0 && (
          <div>
            <div className="my-3 opacity-60">
              <MasterSvg />
              <h2>Master / Influencer</h2>
            </div>
            <div className="flex flex-wrap">
              {master.map((strength) => (
                <div
                  key={strength.id}
                  className="bg-[#383b40] p-2 m-1 rounded-lg flex gap-1 opacity-90"
                >
                  <p>{strength.name}</p>
                  {strength.weight > 0 && (
                    <>
                      <WeightSvg />
                      <p>{strength.weight.toFixed(2)}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {expert.length > 0 && (
          <div>
            <div className="my-3 opacity-60">
              <ExpertSvg />
              <h2>Expert</h2>
            </div>
            <div className="flex flex-wrap">
              {expert.map((strength) => (
                <div
                  key={strength.id}
                  className="bg-[#383b40] p-2 m-1 rounded-lg flex gap-1 opacity-90"
                >
                  <p>{strength.name}</p>
                  {strength.weight > 0 && (
                    <>
                      <WeightSvg />
                      <p>{strength.weight.toFixed(2)}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {proficient.length > 0 && (
          <div>
            <div className="my-3 opacity-60">
              <ProficientSvg />
              <h2>Proficient</h2>
            </div>
            <div className="flex flex-wrap">
              {proficient.map((strength) => (
                <div
                  key={strength.id}
                  className="bg-[#383b40] p-2 m-1 rounded-lg flex gap-1 opacity-90"
                >
                  <p>{strength.name}</p>
                  {strength.weight > 0 && (
                    <>
                      <WeightSvg />
                      <p>{strength.weight.toFixed(2)}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {beginner.length > 0 && (
          <div>
            <div className="my-3 opacity-60">
              <BeginnerSvg />
              <h2>Beginner</h2>
            </div>
            <div className="flex flex-wrap">
              {beginner.map((strength) => (
                <div
                  key={strength.id}
                  className="bg-[#383b40] p-2 m-1 rounded-lg flex gap-1 opacity-90"
                >
                  <p>{strength.name}</p>
                  {strength.weight > 0 && (
                    <>
                      <WeightSvg />
                      <p>{strength.weight.toFixed(2)}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {interested.length > 0 && (
          <div>
            <div className="my-3 opacity-60">
              <InterestedSvg />
              <h2>No experience, but interested</h2>
            </div>
            <div className="flex flex-wrap">
              {interested.map((strength) => (
                <div
                  key={strength.id}
                  className="bg-[#383b40] p-2 m-1 rounded-lg flex gap-1 opacity-90"
                >
                  <p>{strength.name}</p>
                  {strength.weight > 0 && (
                    <>
                      <WeightSvg />
                      <p>{strength.weight.toFixed(2)}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <p>no data</p>
      </>
    );
  }
};

export default Skills;