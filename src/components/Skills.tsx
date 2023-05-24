type propsType = {
  username: string
}

type bioData = {
  "strengths":
  {
    "name": string,
    "proficiency": string,
    "weight": number,
    "recommendations": number,
    "hits": number
  }[]
}

const fetchSkills = async (username: string = "renanpeixotox") => {
  const res = await fetch(`https://torre.bio/api/bios/${username}`)
  const data = await res.json()
  return data as bioData
}

const Skills = async ({ username }: propsType) => {
  const data = await fetchSkills(username) as unknown as bioData

  const master = data.strengths?.filter(strength => strength.proficiency === "master")
  const expert = data.strengths?.filter(strength => strength.proficiency === "expert")
  const proficient = data.strengths?.filter(strength => strength.proficiency === "proficient")
  const beginner = data.strengths?.filter(strength => strength.proficiency === "novice")
  const interested = data.strengths?.filter(strength => strength.proficiency === "no-experience-interested")

  return (
    <>
      <h1>
        Skills and interests:
      </h1>
      {master.length > 0 && 
        <div>
          <h2>Master / Influencer</h2>
          {master.map(strength => <p>{strength.name}</p>)}
        </div>
      }
      {expert.length > 0 &&
        <div>
          <h2>Expert</h2>
          {expert.map(strength => <p>{strength.name}</p>)}
        </div>
      }
      {proficient.length > 0 &&
        <div>
          <h2>Proficient</h2>
          {proficient.map(strength => <p>{strength.name}</p>)}
        </div>
      }
      {beginner.length > 0 &&
        <div>
          <h2>Beginner</h2>
          {beginner.map(strength => <p>{strength.name}</p>)}
        </div>
      }
      {interested.length > 0 &&
        <div>
          <h2>No experience, but interested</h2>
          {interested.map(strength => <p>{strength.name}</p>)}
        </div>
      }
    </>
  )
}

export default Skills