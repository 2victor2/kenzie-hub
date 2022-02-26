import {
  Container,
  Flex,
  FormControl,
  Button,
  VStack,
  Heading,
  Text,
  HStack,
  Image,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Logo from "../../images/Logo.svg";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Register = ({ auth }) => {
  const history = useHistory();
  const Q = {
    1: { title: "Primeiro módulo", description: " (Introdução ao Front-end)" },
    2: { title: "Segundo módulo", description: " (Frontend Avançado)" },
    3: { title: "Terceiro módulo", description: " (Introdução ao Back-end)" },
    4: { title: "Quarto módulo", description: " (Backend Avançado)" },
  };
  const [show, setShow] = useState(false);
  const togglePassword = () => setShow(!show);
  const [defaultValues] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    course_module: "",
  });
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup
      .string()
      .email("Formato de email inválido.")
      .required("Campo obrigatório!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(6, "Senha muito pequena, deve ter pelo menos 6 caracteres."),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não coincidem!")
      .required("Campo obrigatório!"),
    course_module: yup.string().required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: { ...defaultValues },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    delete data.password_confirmation;
    const formattedData = {
      ...data,
      course_module:
        data.course_module === "Primeiro módulo"
          ? Q[1].title + Q[1].description
          : data.course_module === "Segundo módulo"
          ? Q[2].title + Q[2].description
          : data.course_module === "Terceiro módulo"
          ? Q[3].title + Q[3].description
          : data.course_module === "Quarto módulo"
          ? Q[4].title + Q[4].description
          : "",
      bio: "Usuário criado por Kenzinho",
      contact: data.email,
    };
    api
      .post("users", formattedData)
      .then((res) => {
        toast.success("Conta criada com sucesso!");
        history.push("/");
      })
      .catch((err) => toast.error("Email já existente!"));
  };

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container maxW="1440px" p={0}>
        <Flex
          h={["707px", "878px"]}
          py={[5, 10]}
          flexDirection="column"
          alignItems="center"
        >
          <HStack
            justifyContent="space-between"
            w={["295.83px", "370px"]}
            mb={["1.875rem", "2.375rem"]}
          >
            <Image h={["0.875rem", "1.063rem"]} src={Logo} alt="KenzieHub" />
            <Button
              variant="black"
              w={["79.54px", "67.49px"]}
              h={["25.58px", "32px"]}
              px="16.2426px"
              borderRadius="4px"
              fontWeight={600}
              fontSize={["0.600rem", "0.75rem"]}
              onClick={() => history.push("/")}
            >
              Voltar
            </Button>
          </HStack>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              isInvalid={Object.keys(errors).length > 0}
              bgColor="brand.grey3"
              w={["295.83px", "370px"]}
              h={["568.47px", "711px"]}
              px={["17.5897", "22px"]}
              py={["33.5803px", "42px"]}
              borderRadius={["3.19812px", "4px"]}
              boxShadow={[
                "0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25)",
                "0px 4px 40px -10px rgba(0, 0, 0, 0.25)",
              ]}
            >
              <VStack w="100%" h="100%" spacing={2} alignItems="center">
                <VStack spacing={4} alignSelf="center">
                  <Heading
                    fontWeight="bold"
                    fontSize={["0.875rem", "1.125rem"]}
                    color="brand.grey0"
                  >
                    Crie sua conta
                  </Heading>
                  <Text fontSize={["0.600rem", "0.75rem"]} color="brand.grey1">
                    Rápido e grátis, vamos nessa!
                  </Text>
                </VStack>
                <Input
                  label="Nome"
                  name="name"
                  id="name"
                  error={errors.name?.message}
                  register={register}
                  placeholder="Digite aqui seu nome"
                />
                <Input
                  label="Email"
                  name="email"
                  id="email"
                  error={errors.email?.message}
                  register={register}
                  placeholder="Digite aqui seu email"
                />
                <InputGroup>
                  <Input
                    label="Senha"
                    name="password"
                    id="password"
                    type={show ? "text" : "password"}
                    error={errors.password?.message}
                    register={register}
                    placeholder="Digite aqui sua senha"
                  />
                  <InputRightElement top={["24px", "34px"]}>
                    <Button
                      variant="black"
                      bg="brand.grey2"
                      w={["11.23px", "14px"]}
                      h={["17.65px", "22px"]}
                      p={0}
                      color="brand.grey1"
                      _hover={{ bg: "brand.grey2" }}
                      _focus={{ ring: 0 }}
                      onClick={togglePassword}
                    >
                      {show ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <InputGroup>
                  <Input
                    label="Confirmar senha"
                    name="password_confirmation"
                    id="password_confirmation"
                    type={show ? "text" : "password"}
                    error={errors.password_confirmation?.message}
                    register={register}
                    placeholder="Digite aqui sua senha"
                  />
                  <InputRightElement top={["24px", "34px"]}>
                    <Button
                      variant="black"
                      bg="brand.grey2"
                      w={["11.23px", "14px"]}
                      h={["17.65px", "22px"]}
                      p={0}
                      color="brand.grey1"
                      _hover={{ bg: "brand.grey2" }}
                      _focus={{ ring: 0 }}
                      onClick={togglePassword}
                    >
                      {show ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <Select
                  label="Selecionar módulo"
                  name="course_module"
                  id="course_module"
                  placeholder="-- Selecione o módulo --"
                  error={errors.course_module?.message}
                  register={register}
                >
                  <option value="Primeiro módulo">{Q[1].title}</option>
                  <option value="Segundo módulo">{Q[2].title}</option>
                  <option value="Terceiro módulo">{Q[3].title}</option>
                  <option value="Quarto módulo">{Q[4].title}</option>
                </Select>
                <Button
                  variant="primary"
                  isDisabled={
                    !(
                      Object.keys(dirtyFields).length ===
                      Object.keys(defaultValues).length
                    )
                  }
                  type="submit"
                  sx={{
                    w: "100%",
                    minH: ["38.38px", "48px"],
                    px: "22.3336px",
                    borderWidth: "1.2182px",
                    borderRadius: "4px",
                    fontSize: ["0.8rem", "1rem"],
                    fontWeight: 500,
                  }}
                >
                  Cadastrar
                </Button>
              </VStack>
            </FormControl>
          </form>
        </Flex>
      </Container>
    </motion.div>
  );
};

export default Register;
