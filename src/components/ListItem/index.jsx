import { Heading, ListItem as ChakraListItem, Text } from "@chakra-ui/react";

const ListItem = ({ tech: { title, status, id }, handleModal, setTechId, }) => (
  <ChakraListItem
    w="100%"
    h="48.73px"
    p="12.18px"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    bg="brand.grey4"
    borderRadius="4px"
    _hover={{ cursor: "pointer", bg: "brand.grey2" }}
    onClick={() => {handleModal("Alterar Tecnologia"); setTechId(id)}}
  >
    <Heading fontWeight="bold" fontSize="0.888rem" color="brand.grey0">
      {title}
    </Heading>
    <Text
      fontSize="0.75rem"
      color="brand.grey1"
      my="10px !important"
      mx="0px !important"
    >
      {status}
    </Text>
  </ChakraListItem>
);

export default ListItem;
