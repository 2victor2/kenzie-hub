import { Container, Flex, FormControl, Select, Button } from "@chakra-ui/react";
import Input from "../../components/Input";

const Register = () => {
  return (
    <Container maxW="1440px" p={0}>
      <Flex h="100vh" py={[5,10]} flexDirection="column" alignItems="center">
        <FormControl w={["295.83px", "370px"]} h={["568.47px","711px"]} pl={15}>
          <Input
            label="Nome"
            error="Deu erro aqui meu chapa"
            placeholder="Digite seu nome"
          />
          <Input
            label="Nome"
            error="Deu erro aqui meu chapa"
            placeholder="Digite seu nome"
          />
          <Input
            label="Nome"
            error="Deu erro aqui meu chapa"
            placeholder="Digite seu nome"
          />
          <Input
            label="Nome"
            error="Deu erro aqui meu chapa"
            placeholder="Digite seu nome"
          />
          <Select
            variant="filled"
            placeholder="Primeiro módulo"
            w={["263.79px", "329.93px"]}
            h={["38.38px", "48px"]}
            py={["12.9865px", "16.2426px"]}
            borderRadius={["3px", "4px"]}
            borderWidth={["0.973988px", "1.2182px"]}
            _placeholder={{ fontSize: ["0.875rem", "1rem"] }}
          >
            <option value="Segundo módulo">Segundo módulo</option>
            <option value="Terceiro módulo">Terceiro módulo</option>
          </Select>
          <Button variant="primary" isDisabled>
            Cadastrar Tecnologia
          </Button>
        </FormControl>
      </Flex>
    </Container>
  );
};

export default Register;
