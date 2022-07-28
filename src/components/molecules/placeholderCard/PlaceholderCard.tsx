import Text from "../../atoms/text";

export const PlaceholderCard: React.FC = () => {
  return (
    <div className="mt-5 p-3 shadow-lg  rounded h-[275px]  bg-white border flex content-center justify-center ">
      <Text tag="span" className="self-center">
        loading ...
      </Text>
    </div>
  );
};
