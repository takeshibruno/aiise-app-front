import { Dimensions } from "react-native";
import { TouchableOpacity, View, StyleSheet, Alert } from "react-native";
import { Select, Box, CheckIcon, Center, NativeBaseProvider, FormControl, Input, Button, Text, Heading, Divider, Flex } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import { React, useState } from "react";
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import Agenda from './Agenda';



const { width, height } = Dimensions.get("screen");

const Example = () => {
  const [service, setService] = useState("");
  const [peluquero, setPeluquero] = useState("");
  const [horario, setHorario] = useState("");
  const [date, setDate] = useState(new Date());
  const [picker, setPicker] = useState(false);
  const navigation = useNavigation();

  const toggleDate = () => {
    setPicker(!picker);
  }

  const [isModalVisible, setModalVisible] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    toggleDate();
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleButtonClick = () => {
    setModalVisible(false);
  }

  const handleTouch = () => {
    navigation.navigate("Agenda");
  }

  const handleClick = () => {
    setModalVisible(false);
    Alert.alert('Exito!', 'Tu cita se ha reservado correctamente, nos vemos pronto.')
    setDate(new Date());
    setPeluquero('');
    setHorario('');
    setService('');
    navigation.navigate("Agenda");
  }


  const handleRegister = () => {
    console.log("Cita reservada");
    console.log(peluquero);
    console.log(horario);
    console.log(service);
    console.log(date);
    setModalVisible(true);
  }

  return (
    <Box marginRight={10} maxW="300">
      <FormControl.Label _text={{
        bold: true
      }}>Elige tu fecha:</FormControl.Label>
      <TouchableOpacity onPress={toggleDate}>
        <Input
          value={formatDate(date)}
          editable={false}
          pointerEvents="none"
          width={width / 1.20}
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
      <FormControl.Label marginTop={10} >Elige tu peluquero: </FormControl.Label>
      <Select selectedValue={peluquero}
        minWidth={width / 1.20}
        accessibilityLabel="Choose Service"
        placeholder="Elige el peluquero"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }}
        mt={1}
        onValueChange={value => setPeluquero(value)}>
        <Select.Item label="Lucas Ricci" value="Lucas Ricci" />
        <Select.Item label="Marcelo Lopez" value="Marcelo Lopez" />
        <Select.Item label="Bruno Honda" value="Bruno Honda" />
        <Select.Item label="Cristiano Ronaldo" value="Su" />
        <Select.Item label="Neymar da Silva Santos Junior" value="Neymar da Silva Santos Junior" />
        <Select.Item label="Lionel Messi" value="Messi" />

      </Select>
      <FormControl.Label marginTop={10}>Horários disponibles para esta fecha: </FormControl.Label>
      <Select selectedValue={horario} minWidth={width / 1.20} accessibilityLabel="Choose Service" placeholder="Elige la fecha" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={value => setHorario(value)}>
        <Select.Item label="9:30" value="9:30" />
        <Select.Item label="12:00" value="12:00" />
        <Select.Item label="15:50" value="15:50" />
        <Select.Item label="16:30" value="16:30" />
        <Select.Item label="21:45" value="21:45" />
      </Select>
      <FormControl.Label marginTop={10}>Elige tu servicios: </FormControl.Label>
      <Select selectedValue={service} minWidth={width / 1.20} accessibilityLabel="Choose Service" placeholder="Elige el servicio" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={value => setService(value)}>
        <Select.Item label="Cortar pelo" value="Cortar pelo" />
        <Select.Item label="Barba" value="Barba" />
        <Select.Item label="Hidratación" value="Hidratación" />
        <Select.Item label="Bottox" value="Bottox" />
        <Select.Item label="Luces" value="Luces" />
      </Select>
      <Center>
        <Button.Group width={370} marginTop={10} marginLeft={12} mt="5" space={2}>
          <Button colorScheme="indigo" flex={1} onPress={handleTouch}>
            <Text color="#FFFFFF">CERRAR</Text>
          </Button>
          <Button colorScheme="indigo" flex={1} onPress={handleRegister}>
            <Text color="#FFFFFF">REGISTRAR</Text>
          </Button>
        </Button.Group>
      </Center>
      <Modal
        animationType="slide"
        transparent={true}
        isVisible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {/* Content of the modal */}
          <View style={styles.modalContent}>
            <Box alignItems="center">
              <Box w="160">
                <Heading mx="auto">Don Luis 8</Heading>
                <Divider my="2" _light={{
                  bg: "muted.800"
                }} _dark={{
                  bg: "muted.50"
                }} />
                <Heading mx="auto"> {peluquero}</Heading>
                <Divider my="2" _light={{
                  bg: "muted.800"
                }} _dark={{
                  bg: "muted.50"
                }} />
                <Flex mx="3" direction="row" justify="space-evenly" h="60">
                  <Heading py="2">{formatDate(date)}</Heading>
                </Flex>
                <Box alignItems="center">
                  <Box w="140">
                    <Divider my="2" _light={{
                      bg: "muted.800"
                    }} _dark={{
                      bg: "muted.50"
                    }} />
                    <Heading mx="3" alignItems="center" flexDirection="row">
                      {horario}
                    </Heading>
                    <Box w="140">

                    <Divider my="2" _light={{
                      bg: "muted.800"
                    }} _dark={{
                      bg: "muted.50"
                    }} />
                    <Heading fontSize={26} mx="3" alignItems="center" flexDirection="row">
                      {service}
                    </Heading>
                  </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Button.Group marginTop={10} isAttached colorScheme="blue" mx={{
              base: "auto",
              md: 0,
            }} size="lg">
              <Button onPress={handleButtonClick}>Editar</Button>
              <Button onPress={handleClick} variant="outline">Guardar</Button>
            </Button.Group>
          </View>
        </View>
      </Modal>
    </Box>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#fff', // White background
    padding: 20,
    borderRadius: 10,
  },
});


export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
