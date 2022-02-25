import { List as ChakraList } from "@chakra-ui/react";
import ListItem from "../ListItem";

const List = ({ techs, handleModal, setTechId }) => {
  return (
    <ChakraList
      spacing={3}
      w={["100%", "463px", "751px"]}
      h="416.37px"
      bg="brand.grey3"
      p="22px 19px"
      borderRadius="4px"
      overflowY="auto"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {techs.map((tech) => (
        <ListItem
          key={tech.id}
          tech={tech}
          handleModal={handleModal}
          setTechId={setTechId}
        />
      ))}
    </ChakraList>
  );
};

export default List;
