import { List as ChakraList } from "@chakra-ui/react";
import ListItem from "../ListItem";

const List = () => {
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
      {[
        { title: "Chakra UI", status: "Iniciante" },
        { title: "Material UI", status: "Intermediário" },
        { title: "Styled-Components", status: "Avançado" },
        { title: "Chakra UI", status: "Iniciante" },
        { title: "Material UI", status: "Intermediário" },
        { title: "Styled-Components", status: "Avançado" },
        { title: "Chakra UI", status: "Iniciante" },
        { title: "Material UI", status: "Intermediário" },
        { title: "Styled-Components", status: "Avançado" },
        { title: "Chakra UI", status: "Iniciante" },
        { title: "Material UI", status: "Intermediário" },
        { title: "Styled-Components", status: "Avançado" },
      ].map((tech, index) => (
        <ListItem key={index} tech={tech} />
      ))}
    </ChakraList>
  );
};

export default List;
