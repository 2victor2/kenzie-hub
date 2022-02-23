import { Button, HStack, Image } from "@chakra-ui/react";
import Logo from "../../images/Logo.svg";

const Header = () => {
  const Logout = () => {};
  return (
    <HStack justifyContent={["center"]} px="20px" w="100%" h="72px">
      <HStack
        w={["100%", "463px", "751px"]}
        h="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Image h={["0.875rem", "1.063rem"]} src={Logo} alt="KenzieHub" />
        <Button
          variant="black"
          w="55.49px"
          h="32px"
          px="16.2426px"
          borderRadius="4px"
          fontWeight={600}
          fontSize={["0.600rem", "0.75rem"]}
          onClick={() => {}}
        >
          Sair
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
