import usePagination from "../../common/hooks/usePagination";
import {
  absencePagination,
  absenceSelector,
} from "../../store/absences/absence.slice";
import Button from "../atoms/button";
import DatePicker from "../atoms/datepicker";
import { SelectList, SelectListOption } from "../atoms/selectList/selectList";
import CardGrid from "../molecules/cardGrid";
import Pagination from "../molecules/pagination";

const AbsencePanel = () => {
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
    setFilter({ key: "date", value: event.target.value });
  };

  const statusList = [
    { value: "all", label: "All" },
    { value: "requested", label: "Requested" },
    { value: "confirmed", label: "Confirmed" },
    { value: "rejected", label: "Rejected" },
  ];

  return (
    <div className="h-full flex flex-col p-5 items-center  justify-center ">
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
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="h-[90%] mt-5 w-full">
          <CardGrid data={data} isLoading={isLoading} />
        </div>
        <div className="h-[10%] w-full flex justify-center">
          {data.length !== 0 && (
            <Pagination
              pageCount={totalPages}
              onPageChange={(event: { selected: number }) => {
                setPage(event.selected);
              }}
              containerClassName="w-1/2"
              totalEntries={totalEntries}
              pageSize={pageSize}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AbsencePanel;
