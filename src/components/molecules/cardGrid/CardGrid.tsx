import { Absence } from "../../../common/types/api/absence";
import Text from "../../atoms/text";
import AbsenceCard from "../absenceCard";
import PlaceholderCard from "../placeholderCard";

export interface CardGridProps {
  data?: Absence[];
  isLoading: boolean;
  error?: string;
}

const CardGrid: React.FC<CardGridProps> = ({ data, isLoading, error }) => {
  let content = <></>;

  if (error) {
    content = (
      <div className="h-full bg-white-500  bg-obacit-50 z-50 flex justify-center items-center">
        <Text tag="p" className="text-red-600 text-2xl">
          {error}
        </Text>
      </div>
    );
  } else {
    if (isLoading) {
      let cards = data?.map((element: Absence) => {
        return <PlaceholderCard />;
      });
      content = <div className="grid grid-cols-5  gap-3">{cards}</div>;
    } else {
      if (data?.length === 0) {
        content = (
          <div className="h-full bg-white-500  bg-obacit-50 z-50 flex justify-center items-center">
            <Text tag="p" className="text-xl">
              There is no results
            </Text>
          </div>
        );
      } else {
        let cards = data?.map((element: Absence) => {
          return <AbsenceCard key={element.id} {...element} />;
        });
        content = <div className="grid grid-cols-5  gap-3">{cards}</div>;
      }
    }
  }

  return <>{content}</>;
};

export default CardGrid;