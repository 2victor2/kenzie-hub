import {
  FormLabel,
  Input as ChakraInput,
  Text,
  VStack,
} from "@chakra-ui/react";

const Input = ({ label, name, register, error, ...rest }) => (
  <VStack w="100%" h={["80px", "100px"]} spacing={1} alignItems="flex-start">
    <FormLabel fontSize={["0.57rem", "0.76rem"]} color="brand.grey0">
      {label}
    </FormLabel>
    <ChakraInput
      variant="filled"
      {...register(name)}
      {...rest}
      w={["263.79px", "329.93px"]}
      h={["38.38px", "48px"]}
      py={["12.9865px", "16.2426px"]}
      borderRadius={["3px", "4px"]}
      borderWidth={["0.973988px", "1.2182px"]}
      _placeholder={{ fontSize: ["0.875rem", "1rem"] }}
    />
    {error ? (
      <Text fontSize="0.634rem" color="brand.error">
        {error}
      </Text>
    ) : (
      <></>
    )}
  </VStack>
);

export default Input;
