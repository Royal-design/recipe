import { FormControl } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/react";
import "./navbar.scss";
import { MenuItemType } from "../../context/ContextProvider";
import { useState } from "react";
type PropsType = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  data: MenuItemType[];
};
export const Navbar = ({ setQuery }: PropsType) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setQuery(inputValue);
    setInputValue("");
  };
  const handleChange = (e: any) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <FormControl display="flex" flexDir="column" alignItems="center">
        <HStack>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            className="search"
            placeholder="search for recipe"
            value={inputValue}
          />
          <button type="submit">
            <Icon
              type="button"
              as={SearchIcon}
              ml="-5rem"
              color="grey"
              transition="all 0.4s"
              _active={{ marginLeft: "-4rem" }}
            />
          </button>
        </HStack>
      </FormControl>
    </form>
  );
};
