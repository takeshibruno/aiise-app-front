import { Fab, Icon, Box, Center, NativeBaseProvider } from "native-base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Example = () => {
  return <Center>
      <Box height="100" w={[200, 300, 400]} shadow="1" rounded="lg" _dark={{
      bg: "coolGray.200:alpha.20"
    }} _light={{
      bg: "coolGray.200:alpha.20"
    }}>
      
      <Fab renderInPortal={false} shadow={2} size="sm" icon={<Icon color="white" as={AntDesign} name="plus" size="sm"/>} label="Añadir un comunicado " />  
      </Box>
    </Center>;
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