import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSelectedValue = searchParams.get("sortBy") || "";
  console.log(currentSelectedValue);
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      options={options}
      type="white"
      value={currentSelectedValue}
      onChange={handleChange}
    />
  );
}

export default SortBy;
