import React from "react";
import { Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider } from "native-base";
import { Dimensions } from "react-native";


const { width, height } = Dimensions.get("screen");


const Example = () => {
  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Cristiano Ronaldo",
    timeStamp: "12:47 PM",
    recentText: "Cortar el pelo, 18/06/2023 14:30",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Gwen Stacy",
    timeStamp: "11:11 PM",
    recentText: "Luces, 09/08/2023 19:45",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Peter Parker",
    timeStamp: "6:22 PM",
    recentText: "Barba, 12/08/2023 10:00",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Miles Morales",
    timeStamp: "8:56 PM",
    recentText: "Bottox , 13/08/2023 14:30",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Iris West",
    timeStamp: "12:47 PM",
    recentText: "Cortar el pelo, 13/08/2023 17:45",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d7das2",
    fullName: "Iris West",
    timeStamp: "12:49 PM",
    recentText: "Luces , 13/08/2023 18:30",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d722",
    fullName: "Lionel Messi",
    timeStamp: "12:47 PM",
    recentText: "Cortar el pelo, 18/06/2023 14:30",
    avatarUrl: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-874158.jpg&fm=jpg"
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d723",
    fullName: "Neymar Junior",
    timeStamp: "12:47 PM",
    recentText: "Cortar el pelo, 18/06/2023 14:30",
    avatarUrl: "https://st3.depositphotos.com/1017228/18878/i/600/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d724",
    fullName: "Bruno Honda",
    timeStamp: "12:47 PM",
    recentText: "Cortar el pelo, 18/06/2023 14:30",
    avatarUrl: "https://image.shutterstock.com/image-photo/portrait-happy-mid-adult-man-260nw-1812937819.jpg"
  }
];
  return <Box flex={1} minWidth={width / 1.20}> 
      <Heading fontSize="xl" p="4" pb="3">
        Inbox
      </Heading>
      <FlatList  data={data} renderItem={({
      item
    }) => <Box borderBottomWidth="1" _dark={{
      borderColor: "muted.50"
    }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
            <HStack space={[2, 3]} justifyContent="space-between">
              <Avatar size="48px" source={{
          uri: item.avatarUrl
        }} />
              <VStack>
                <Text _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" bold>
                  {item.fullName}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>} 
          keyExtractor={item => item.id} 
          flexGrow={1}
          style={{flexGrow: 1}} />
    </Box>;
};
    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    