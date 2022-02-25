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
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import api from "../../services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import Input from "../../components/Input";
import List from "../../components/List";
import Select from "../../components/Select";
import { toast } from "react-toastify";

const Dashboard = ({ auth, setAuth, techs, setTechs, user }) => {
  const [userToken] = useState(localStorage.getItem("@KenzieHub:userToken"));
  const [updated, setUpdated] = useState(0);
  const [modalType, setModalType] = useState("");
  const [techId, setTechId] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleModal = (type) => {
    setModalType(type);
    onOpen();
  };

  useEffect(() => {
    async function getUserTechs() {
      const response = await api.get(`users/${user.id}`);
      setTechs(response.data.techs);
    }
    getUserTechs();
  }, [updated]);

  const [defaultValues] = useState({
    title: "",
    status: "",
  });
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório!"),
    status: yup.string().required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm({
    defaultValues: { ...defaultValues },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    if (modalType === "Cadastrar Tecnologia") {
      api
        .post("users/techs", data, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((res) => {
          toast.success("Tecnologia cadastrada com sucesso!");
          setTechs([...techs, res.data]);
          onClose();
        })
        .catch((err) => toast.error("Tecnologia já cadastrada!"));
    } else if (modalType === "Alterar Tecnologia") {
      delete data.title;
      api
        .put(`users/techs/${techId}`, data, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then(({ data }) => {
          toast.success("Tecnologia atualizada com sucesso!");
          setUpdated(updated + 1);
          onClose();
        })
        .catch((err) => toast.error("Ops! Algo deu errado!"));
    }
  };

  const deleteTech = () => {
    api
      .delete(`users/techs/${techId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        toast.success("Tecnologia deletada da lista.");
        setUpdated(updated + 1);
        onClose();
      });
  };

  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <Container maxW="1440px" p={0}>
      <Flex flexDir="column" pb={[5, 10]}>
        <Header setAuth={setAuth} />
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
              Olá, {user.name}!
            </Heading>
            <Text
              fontSize="0.75rem"
              color="brand.grey1"
              my="10px !important"
              mx="0px !important"
            >
              {user.course_module}
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
              onClick={() => handleModal("Cadastrar Tecnologia")}
            >
              +
            </Button>
          </HStack>
          <List techs={techs} setTechId={setTechId} handleModal={handleModal} />
        </Flex>
      </Flex>

      {/* MODAL */}
      <Modal isCentered closeOnOverlayClick isOpen={isOpen} onClose={onClose}>
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <Input
                  label={
                    modalType === "Cadastrar Tecnologia"
                      ? "Nome"
                      : "Nome do projeto"
                  }
                  name="title"
                  id="title"
                  register={register}
                  placeholder={
                    modalType === "Cadastrar Tecnologia"
                      ? "Digite o nome"
                      : "Não é possível alterar o nome!"
                  }
                />
                <Select
                  label={
                    modalType === "Cadastrar Tecnologia"
                      ? "Selecione o status"
                      : "Status"
                  }
                  name="status"
                  id="status"
                  register={register}
                  placeholder="-- Selecione o status --"
                >
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </Select>
                {modalType === "Cadastrar Tecnologia" ? (
                  <Button
                    variant="primary"
                    type="submit"
                    w="100%"
                    minH={["38.38px", "48px"]}
                    fontSize={["0.8rem", "1rem"]}
                    isDisabled={
                      !(
                        Object.keys(dirtyFields).length ===
                        Object.keys(defaultValues).length
                      )
                    }
                  >
                    Cadastrar Tecnologia
                  </Button>
                ) : (
                  <SimpleGrid w="100%" columns={3} gap={2}>
                    <GridItem colSpan={2}>
                      <Button
                        variant="primary"
                        type="submit"
                        minH={["38.38px", "48px"]}
                        w="100%"
                        fontSize={["0.8rem", "1rem"]}
                        isDisabled={
                          !(
                            Object.keys(dirtyFields).length ===
                            Object.keys(defaultValues).length
                          )
                        }
                      >
                        Salvar alterações
                      </Button>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Button
                        variant="grey"
                        onClick={deleteTech}
                        w="100%"
                        minH={["38.38px", "48px"]}
                        fontSize={["0.8rem", "1rem"]}
                      >
                        Excluir
                      </Button>
                    </GridItem>
                  </SimpleGrid>
                )}
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter
            bg="brand.grey3"
            px={["17px", "22px"]}
            pt={0}
          ></ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Dashboard;
