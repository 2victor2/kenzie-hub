import {
  Container,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const Modal = ({ type, techId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // <Flex
    //   w={["295px", "370px"]}
    //   h={["273.41px", "342px"]}
    //   px={["17px", "22px"]}
    //   bg="brand.grey3"
    //   borderRadius="4px"
    //   boxShadow="0px 4px 40px -10px rgba(0, 0, 0, 0.25)"
    //   position="absolute"
    //   top={["149.29px","189px"]}
    //   left={["13px","535px"]}
    //   flexDir="column"
    //   alignItems="flex-start"
    // ></Flex>
    <ChakraModal
      isCentered
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}></ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
