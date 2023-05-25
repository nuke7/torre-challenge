type propsType = {
  username: string;
};

type bioData = {
  "person": 
  {
    'name': string,
    "pictureThumbnail": string,
  }
}

const fetchSkills = async (username: string = "renanpeixotox") => {
  const res = await fetch(`https://torre.bio/api/bios/${username}`);
  const data = await res.json();
  console.log(data.person.name);
  return data;
};

const Title = async ({ username }: propsType) => {
  const data = (await fetchSkills(username)) as unknown as bioData;

  return (
    <div className="flex flex-col py-10 items-center gap-2">
      <div className="hex">
      <div className="flex hex-background items-center align-center justify-center">
        <img src={data.person.pictureThumbnail} alt="pic thumbnail" />
      </div>
      </div>
      <h3>{data.person.name}</h3>
    </div>
  );
};

export default Title;
