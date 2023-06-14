import { Fab, Icon, Box, Center, NativeBaseProvider, VStack, FormControl, Input, Text, Button } from "native-base";
import { React, useState } from "react";
import { Dimensions, View, TouchableOpacity, KeyboardAvoidingView, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Modal from 'react-native-modal';
import DateTimePicker from "@react-native-community/datetimepicker";
import { url_back } from "../constants/back";


const { width, height } = Dimensions.get("screen");

const Example = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const [email_comunicado, setEmail] = useState('');
  const [titulo_comunicado, setTitulo] = useState('');
  const [contenido_comunicado, setContenido] = useState('');
  
  const [date, setDate] = useState(new Date());
  const [picker, setPicker] = useState(false);

  const toggleDate = () => {
    setPicker(!picker);
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    toggleDate();
  };

  const handleClick = () => {
    console.log("Cliquei");
    setModalVisible(true);
  }

  const handleButtonClick = () => {
    console.log("Fechar");
    setModalVisible(false);
  }

  const handleRegister = () => {
    if (email_comunicado == '') {
      Alert.alert('Error', 'El correo electrónico es obligatorio.');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email_comunicado.name.trim())) {
      Alert.alert('Error', 'El formato del correo electrónico no es válido.');
      setEmail({ name: '' });
    } else if (titulo_comunicado == '') {
      Alert.alert('Error', 'El título es obligatorio.');
    } else if (contenido_comunicado == '') {
      Alert.alert('Error', 'El comunicado es obligatorio.');
    } else if (date.getTime() < new Date().setHours(0, 0, 0, 0)) {
      Alert.alert('Error', 'La fecha de expiración no puede ser anterior a la fecha de hoy.');
    } else {
      const sendData = {
        email: email_comunicado.name,
        titulo: titulo_comunicado.name,
        contenido: contenido_comunicado.name,
        fecha_expiracion: formatSendDate(date),
      };

      fetch(url_back + '/comunicados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
      })
        .then(response => response.json())
        .then(data => {

          const desiredValue = 'Publicado';

          if (data.text === desiredValue) {
            setModalVisible(false);
            Alert.alert('Exito!', 'Tu comunicado se ha publicado correctamente y ya puedes verlo en la pantalla principal.')
          } else {
            setEmail({ name: '' });
            Alert.alert('Error!', 'El correo que has introducido no esta registrado en los usuarios.') // Show the modal
          }

        })
        .catch(error => {
          console.error(error);
        });
    }

  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatSendDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  return (
    <Center>
      <Fab position="absolute" bottom={-height * 0.41} right={-width * 0.46} renderInPortal={false} onPress={handleClick} shadow={2} size="sm" icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />} label="Añadir un comunicado " />
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <VStack width="90%" mx="3" maxW="300px">
            <KeyboardAvoidingView behavior="height">
              <FormControl isRequired>
                <FormControl.Label _text={{
                  bold: true
                }}>Correo Electronico</FormControl.Label>
                <Input onChangeText={value => setEmail({
                  ...email_comunicado,
                  name: value
                })} value={email_comunicado.name} />
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
                }}>Titulo del Comunicado</FormControl.Label>
                <Input onChangeText={value => setTitulo({
                  ...titulo_comunicado,
                  name: value
                })} value={titulo_comunicado.name}/>
                <FormControl.HelperText _text={{
                  fontSize: 'xs'
                }}>
                  <Text fontSize={11}>El titulo de lo comunicado es obligatorio.</Text>
                </FormControl.HelperText>
                <FormControl.ErrorMessage _text={{
                  fontSize: 'xs'
                }}>
                  <Text>Error Name</Text>
                </FormControl.ErrorMessage>
                <FormControl.Label _text={{
                  bold: true
                }}>Comunicado</FormControl.Label>
                <Input height={80} onChangeText={value => setContenido({
                  ...contenido_comunicado,
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
              <FormControl.Label _text={{
                bold: true
              }}>Fecha Expiración</FormControl.Label>
              <TouchableOpacity onPress={toggleDate}>
                <Input
                  value={formatDate(date)}
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
              {picker && (
                <DateTimePicker
                  style={{ width: '100%', marginBottom: 10 }}
                  value={date}
                  mode="date"
                  placeholder="Select date"
                  format="DD/MM/YYYY"
                  minDate="1900-01-01"
                  maxDate="2100-12-31"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateInput: {
                      borderWidth: 1,
                      borderColor: '#ccc',
                      borderRadius: 4,
                    },
                    // You can customize the date picker further using other styles
                  }}
                  onChange={onChange}
                />
              )}
              <Button.Group width={320} marginLeft={-2} mt="5" space={2}>
                <Button colorScheme="indigo" flex={1} onPress={handleButtonClick}>
                  <Text color="#FFFFFF">CERRAR</Text>
                </Button>
                <Button colorScheme="indigo" flex={1} onPress={handleRegister}>
                  <Text color="#FFFFFF">REGISTRAR</Text>
                </Button>
              </Button.Group>
            </KeyboardAvoidingView>
          </VStack>
        </View>
      </Modal>
    </Center>
  );
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
