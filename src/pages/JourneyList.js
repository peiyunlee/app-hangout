import {
  Text,
  Image,
  Box,
  FlatList,
  Flex,
  Button,
  Pressable,
  ZStack,
  Avatar,
  Center,
} from "native-base";
import icon_nav from "../assets/images/icon/nav.png";
import image_avatar3 from "../assets/images/avatar3.png";
import image_avatar1 from "../assets/images/avatar1.png";
import image_avatar2 from "../assets/images/avatar2.png";

const journeyData = [
  {
    id: "0",
    name: "畢業旅行",
    time: "2022/01/01 (3天)",
    status: "計畫中",
  },
  {
    id: "1",
    name: "畢業旅行",
    time: "2022/01/01 (3天)",
    status: "旅行中",
  },
  {
    id: "2",
    name: "畢業旅行",
    time: "2022/01/01 (3天)",
    status: "完成",
  }
];

export default function JourneyList() {
  return (
    <Box flex="1" bg="primary.400">
      <Box w="100%" h="110px" justifyContent="flex-end">
        <Flex
          h="65px"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          paddingX="15px"
        >
          <Box w="90px" bg="red.200"></Box>
          <Text
            textAlign="center"
            fontSize="lg"
            fontWeight="bold"
            letterSpacing="2xl"
            fontFamily="body"
            color="white"
          >
            我的旅行清單
          </Text>
          <Flex direction="row" justifyContent="flex-end" w="90px">
            {/* <Button padding="5px" marginRight="10px" bg="primary.400">
              <Image source={icon_nav} alt="選單" />
            </Button> */}
            <Button
              padding="5px"
              bg="primary.400"
              _pressed={{ bg: "primary.400" }}
            >
              <Image source={icon_nav} alt="選單" />
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box
        bg="gray.100"
        rounded="2xl"
        h="full"
        paddingLeft="6"
        paddingRight="4"
        paddingY="6"
      >
        <FlatList
          data={journeyData}
          renderItem={({ item }) => (
            <Pressable mb="1">
              <Box
                bg="black"
                opacity="0.05"
                position="absolute"
                w="99%"
                h="90%"
                bottom="1.5"
                left="1"
                rounded="xl"
              ></Box>
              <Flex
                direction="row"
                alignItems="center"
                bg="white"
                w="98.5%"
                paddingX={4}
                paddingY={3}
                rounded="lg"
                marginBottom={3}
              >
                <Box flex="1">
                  <Text
                    fontSize="md"
                    marginBottom={1}
                    letterSpacing="2xl"
                    fontFamily="body"
                  >
                    {item.name}
                  </Text>
                  <Text
                    color="gray.500"
                    fontSize="sm"
                    letterSpacing="2xl"
                    fontFamily="body"
                  >
                    {item.time}
                  </Text>
                </Box>
                <Center w="65px" h="23px" mr="3" bg="primary.300" rounded="full">
                  <Text
                    letterSpacing="2xl"
                    fontFamily="body"
                    fontWeight="500"
                    color="white"
                  >
                    {item.status}
                  </Text>
                </Center>
                <Box w="16" h="8">
                  <ZStack>
                    <Avatar size="sm" ml="8" source={image_avatar2}>
                      AJ
                    </Avatar>
                    <Avatar size="sm" ml="4" source={image_avatar3}>
                      hs
                    </Avatar>
                    <Avatar size="sm" ml="0" source={image_avatar1}>
                      AJ
                    </Avatar>
                    <Text right="-5" top="4" fontSize="xs" fontWeight="500" color="gray.500" letterSpacing="xl">+3</Text>
                  </ZStack>
                </Box>
              </Flex>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </Box>
  );
}
