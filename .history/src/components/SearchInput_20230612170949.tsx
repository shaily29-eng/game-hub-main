import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event) => {
      event.preventDefault(); //to prevent the form from being posted to server
      if (ref.current) onSearch(ref.current.value); //can use reference hook or state hook
    }}>
      <InputGroup> 
        <InputLeftElement children={<BsSearch />} /> 
        <Input ref={ref} borderRadius={20} placeholder="Search games..." variant="filled" />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

//<InputLeftElement children={<BsSearch />} /> -- to add search icon!
