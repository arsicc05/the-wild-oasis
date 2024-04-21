import { useSearchParams } from "react-router-dom";
import Select from "./Select";

const SortBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortby") || "";
  function handleChange(e) {
    searchParams.set("sortby", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      options={options}
      type={"white"}
      value={sortBy}
      onChange={handleChange}
    />
  );
};

export default SortBy;
