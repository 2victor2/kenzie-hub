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
} from "@chakra-ui/react";
import Logo from "../../images/Logo.svg";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  return (
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
        <FormControl
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
            <Input label="Nome" error="" placeholder="Digite aqui seu nome" />
            <Input label="Email" error="" placeholder="Digite aqui seu email" />
            <Input label="Senha" error="" placeholder="Digite aqui sua senha" />
            <Input
              label="Confirmar senha"
              error=""
              placeholder="Digite aqui sua senha"
            />
            <Select label="Selecionar módulo" placeholder="Primeiro módulo">
              <option value="Segundo módulo">Segundo módulo</option>
              <option value="Terceiro módulo">Terceiro módulo</option>
            </Select>
            <Button
              variant="primary"
              isDisabled={false}
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
      </Flex>
    </Container>
  );
};

export default Register;
