import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  FormControl,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import List from "../../components/List";
import Select from "../../components/Select";

const Dashboard = () => {
  const [modalType, setModalType] = useState("Alterar Tecnologia");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleModal = (type) => {
    setModalType(type);
  };
  return (
    <Container maxW="1440px" p={0}>
      <Flex flexDir="column" pb={[5, 10]}>
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
      <Modal isCentered closeOnOverlayClick isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={["295px", "370px"]}>
          <ModalHeader
            color="brand.grey0"
            bg="brand.grey2"
            h={["40px", "50px"]}
            px={["17px", "22px"]}
          >
            {modalType}
          </ModalHeader>
          <ModalCloseButton color="brand.grey1" top="var(--chakra-space-4)" />
          <ModalBody bg="brand.grey3" px={["17px", "22px"]}>
            <FormControl>
              <Input
                label={
                  modalType === "Cadastrar Tecnologia"
                    ? "Nome"
                    : "Nome do projeto"
                }
                placeholder={
                  modalType === "Cadastrar Tecnologia"
                    ? "Digite o nome"
                    : "Digite o novo nome"
                }
              />
              <Select
                label={
                  modalType === "Cadastrar Tecnologia"
                    ? "Selecione o status"
                    : "Status"
                }
                placeholder="Iniciante"
              >
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter bg="brand.grey3" px={["17px", "22px"]} pt={0}>
              {modalType === "Cadastrar Tecnologia" ? (
                <Button variant="primary" w="100%" minH={["38.38px", "48px"]} fontSize={["0.8rem", "1rem"]} >Cadastrar Tecnologia</Button>
              ) : (
                <SimpleGrid  w="100%" columns={3} gap={2}>
                  <GridItem colSpan={2}>
                    <Button variant="primary" minH={["38.38px", "48px"]} w="100%" fontSize={["0.8rem", "1rem"]} isDisabled>
                      Salvar alterações
                    </Button>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Button variant="grey" w="100%" minH={["38.38px", "48px"]} fontSize={["0.8rem", "1rem"]} >Excluir</Button>
                  </GridItem>
            </SimpleGrid>
              )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Dashboard;
