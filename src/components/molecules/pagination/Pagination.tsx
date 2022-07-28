import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import Text from "../../atoms/text";

export interface PaginationProps extends ReactPaginateProps {
  totalEntries: number;
  pageSize: number;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <div className="flex flex-col w-full  items-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={props.onPageChange}
        pageRangeDisplayed={props.pageRangeDisplayed}
        pageCount={props.pageCount}
        previousLabel="<"
        containerClassName={
          "flex relative inline-flex items-center px-2 py-2 rounded border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 " +
          props.containerClassName
        }
        previousClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        nextClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        pageClassName="grow flex mx-2"
        pageLinkClassName="grow bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium justify-center"
        activeLinkClassName="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
      />

      <Text tag="span" className="text-xl py-2">
        Total number of entries {props.totalEntries}
      </Text>
    </div>
  );
};

export default Pagination;
