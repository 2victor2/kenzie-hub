import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import List from "../../components/List";

const Dashboard = () => {
  return (
    <Container maxW="1440px" p={0}>
      <Flex flexDir="column" pb={[5, 10]} >
        <Header />
        <Flex
          h={["131px", "118px"]}
          flexDir={["column", "row"]}
          px="20px"
          alignItems={["flex-start", "center"]}
          justifyContent={["center", "space-around"]}
          borderTopWidth="1px"
          borderTopStyle="solid"
          borderTopColor="brand.grey3"
          borderBottomWidth="1px"
          borderBottomStyle="solid"
          borderBottomColor="brand.grey3"
        >
          <HStack
            w={["100%", "463px", "751px"]}
            h="100%"
            alignItems={["flex-start", "center"]}
            flexDir={["column", "row"]}
            justifyContent={["center", "space-between"]}
          >
            <Heading fontWeight="bold" fontSize="1.125rem" color="brand.grey0">
              Olá, userrr nameeeee!
            </Heading>
            <Text
              fontSize="0.75rem"
              color="brand.grey1"
              my="10px !important"
              mx="0px !important"
            >
              user module (indtrodução ao module-user)
            </Text>
          </HStack>
        </Flex>
        <Flex flexDir="column" alignItems="center" px="20px">
          <HStack
            w={["100%", "463px", "751px"]}
            justifyContent="space-between"
            my="26px"
          >
            <Heading fontWeight={600} fontSize="1rem" color="brand.grey0">
              Tecnologias
            </Heading>
            <Button
              variant="black"
              w="32px"
              h="32px"
              borderRadius="4px"
              fontWeight="bold"
              fontSize="1.375rem"
              onClick={() => {}}
            >
              +
            </Button>
          </HStack>
          <List />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Dashboard;
