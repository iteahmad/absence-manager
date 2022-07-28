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
import {
  absencePagination,
  absenceSelector,
} from "../store/absences/absence.slice";

const HomePage = () => {
  const {
    data,
    totalPages,
    page,
    filter,
    setFilter,
    setPage,
    pageSize,
    setPageSize,
    totalEntries,
    isLoading,
  } = usePagination(absenceSelector, absencePagination);

  const changeStatusFilter = (option: SelectListOption) => {
    setFilter({ key: "status", value: option.value.toString() });
  };

  const changeDateFilter = (event: any) => {
    console.log(event.target.value);
    setFilter({ key: "date", value: event.target.value });
  };

  const statusList = [
    { value: "all", label: "All" },
    { value: "requested", label: "Requested" },
    { value: "confirmed", label: "Confirmed" },
    { value: "rejected", label: "Rejected" },
  ];

  return (
    <div className="h-screen  flex flex-col p-5 items-stretch  justify-center ">
      <div className="w-full h-min  rounded flex items-center justify-center">
        <Heading> Absence Manager</Heading>
      </div>
      <div className="h-full flex flex-col p-5 items-start  justify-center ">
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
      </div>
    </div>
  );
};

export default HomePage;
