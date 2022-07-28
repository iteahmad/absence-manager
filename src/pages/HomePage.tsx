import usePagination from "../common/hooks/usePagination";
import Button from "../components/atoms/button";
import DatePicker from "../components/atoms/datepicker";
import Heading from "../components/atoms/heading";
import {
  SelectList,
  SelectListOption,
} from "../components/atoms/selectList/selectList";
import CardGrid from "../components/molecules/cardGrid/CardGrid";
import Pagination from "../components/molecules/pagination";
import AbsencePanel from "../components/organisms/AbsencePanel";
import {
  absencePagination,
  absenceSelector,
} from "../store/absences/absence.slice";

const HomePage = () => {
  return (
    <div className="h-screen  flex flex-col p-5 items-stretch  justify-center ">
      <div className="w-full h-min  rounded flex items-center justify-center">
        <Heading> Absence Manager</Heading>
      </div>

      <AbsencePanel />

      {/* <div className="h-full flex flex-col p-5 items-start  justify-center ">
        <div className="h-min w-full rounded flex flex-col items-start  justify-center  border border-gray-200 shadow-md">
          <div
            className="w-full px-6 py-2    rounded 
                        flex flex-row items-center justify-center"
          >
            <div className="basis-1/5 mx-10">
              <SelectList
                name="type"
                options={statusList}
                onChange={changeStatusFilter}
              ></SelectList>
            </div>
            <div className="basis-1/5 mx-10">
              <DatePicker onChange={changeDateFilter} />
            </div>
            <div className="basis-1/5 mx-10">
              <Button className="rounded-xl">fitler</Button>
            </div>
          </div>
        </div>
        <div className="h-5/6 w-full">
          <div className="h-[90%] w-full">
            <CardGrid data={data} isLoading={isLoading} />
          </div>
          <div className="h-[10%] w-full flex justify-center">
            <Pagination
              pageCount={totalPages}
              onPageChange={(event: { selected: number }) => {
                setPage(event.selected);
              }}
              containerClassName="w-1/2"
              totalEntries={totalEntries}
              pageSize={pageSize}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
