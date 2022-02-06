import { Text, Box, Image } from "native-base";
import logo from "../assets/images/logo.png"

export default function Loading() {
  return (
      <Box
        flex={1}
        bg="primary.400"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          marginBottom="9"
          source={logo}
          alt="Alternate Text"
        />
        <Text lineHeight="2xl" textAlign="center" fontSize="xl" fontWeight="bold" letterSpacing="2xl" fontFamily="body" color="white">HangOut {"\n"}結伴出遊吧！</Text>
      </Box>
  );
}
