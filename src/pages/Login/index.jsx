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
import { Redirect, useHistory } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Input from "../../components/Input";
import Logo from "../../images/Logo.svg";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api.js";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Login = ({ auth, setAuth, setUser }) => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const togglePassword = () => setShow(!show);
  const [defaultValues] = useState({
    email: "",
    password: "",
  });
  const schema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { dirtyFields, errors },
  } = useForm({
    defaultValues: { ...defaultValues },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    api
      .post("sessions", data)
      .then(({ data }) => {
        localStorage.setItem("@KenzieHub:userToken", data.token);
        setUser(data.user);
        setAuth(true);
      })
      .catch((err) => toast.error("Senha ou email inválidos"));
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
        <Flex h="100vh" py={[5, 10]} flexDir="column" alignItems="center">
          <HStack
            justifyContent="center"
            w={["295.83px", "370px"]}
            mb={["1.875rem", "2.375rem"]}
          >
            <Image h={["0.875rem", "1.063rem"]} src={Logo} alt="KenzieHub" />
          </HStack>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              isInvalid={Object.keys(errors).length > 0}
              bgColor="brand.grey3"
              w={["295.83px", "370px"]}
              h={["402.69px", "502px"]}
              px={["17.5897", "22px"]}
              py={["33.5803px", "42px"]}
              borderRadius={["3.19812px", "4px"]}
              boxShadow={[
                "0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25)",
                "0px 4px 40px -10px rgba(0, 0, 0, 0.25)",
              ]}
            >
              <VStack w="100%" h="100%" spacing={1} alignItems="center">
                <Heading
                  fontWeight="bold"
                  fontSize={["0.875rem", "1.125rem"]}
                  color="brand.grey0"
                >
                  Login
                </Heading>
                <Input
                  label="Email"
                  name="email"
                  id="email"
                  error={errors.email?.message}
                  register={register}
                  placeholder="Digite seu email"
                />
                <InputGroup>
                  <Input
                    label="Senha"
                    name="password"
                    id="password"
                    error={errors.password?.message}
                    register={register}
                    placeholder="Digite sua senha"
                    type={show ? "text" : "password"}
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
                <VStack spacing={6} w="100%">
                  <Button
                    variant="primary"
                    type="submit"
                    isDisabled={
                      !(
                        Object.keys(dirtyFields).length ===
                        Object.keys(defaultValues).length
                      )
                    }
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
                    Entrar
                  </Button>
                  <Text
                    fontSize={["0.600rem", "0.75rem"]}
                    color="brand.grey1"
                    pt="10px"
                  >
                    Ainda não possui uma conta?
                  </Text>
                  <Button
                    variant="grey"
                    sx={{
                      w: "100%",
                      minH: ["38.38px", "48px"],
                      px: "22.3336px",
                      borderWidth: "1.2182px",
                      borderRadius: "4px",
                      fontSize: ["0.8rem", "1rem"],
                      fontWeight: 500,
                    }}
                    onClick={() => history.push("/register")}
                  >
                    Cadastre-se!
                  </Button>
                </VStack>
              </VStack>
            </FormControl>
          </form>
        </Flex>
      </Container>
    </motion.div>
  );
};

export default Login;
