import Heading from "../components/atoms/heading";

import AbsencePanel from "../components/organisms/AbsencePanel";

const HomePage = () => {
  return (
    //<div className="h-screen  flex flex-col p-5 items-stretch  justify-center ">
    <div className="h-full container flex flex-col p-5 items-stretch  justify-center ">
      <div className="basis-1/12 w-full  rounded flex items-center justify-center">
        <Heading> Absence Manager</Heading>
      </div>
      <div className="basis-11/12 w-full  rounded flex items-center justify-center">
        <AbsencePanel />
      </div>
    </div>
  );
};

export default HomePage;
