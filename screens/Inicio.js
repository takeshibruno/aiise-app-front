import { Fab, Icon, Box, Center, NativeBaseProvider, VStack, FormControl, Input, Text } from "native-base";
import { React, useState } from "react";
import { Dimensions, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get("screen");

const Example = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setData] = useState(false);
  const [email_comunicado, setEmail] = useState('');



  const handleClick = () => {
    console.log("Cliquei");
    setModalVisible(true);
  }
  return <Center>
    <Box height={height * 0} w={[400, 300, 500]} mt={700} shadow="1" rounded="lg" _dark={{
      bg: "coolGray.200:alpha.20"
    }} _light={{
      bg: "coolGray.200:alpha.20"
    }}>

      <Fab renderInPortal={false} onPress={handleClick} shadow={2} size="sm" icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />} label="Añadir un comunicado " />
    </Box>
    <Modal isVisible={isModalVisible}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <VStack width="90%" mx="3" maxW="300px">
          <FormControl isRequired>
            <FormControl.Label _text={{
              bold: true
            }}>Correo Electronico</FormControl.Label>
            <Input onChangeText={value => setData({
              ...formData,
              name: value
            })} />
            <FormControl.HelperText _text={{
              fontSize: 'xs'
            }}>
              <Text fontSize={11}>El correo tiene que ser el correo válido de un usuario admin.</Text>
            </FormControl.HelperText>
            <FormControl.ErrorMessage _text={{
              fontSize: 'xs'
            }}>
              <Text>Error Name</Text>
            </FormControl.ErrorMessage>
            <FormControl.Label _text={{
              bold: true
            }}>Comunicado</FormControl.Label>
            <Input height={80} onChangeText={value => setData({
              ...formData,
              name: value
            })} />
            <FormControl.HelperText _text={{
              fontSize: 'xs'
            }}>
              <Text fontSize={11}>Introduzca el contenido del comunicado.</Text>
            </FormControl.HelperText>
            <FormControl.ErrorMessage _text={{
              fontSize: 'xs'
            }}>
              <Text>Error Name</Text>
            </FormControl.ErrorMessage>
          </FormControl>
        </VStack>
      </View>
    </Modal>
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
