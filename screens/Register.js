import React, {useState} from "react";
import { StyleSheet, ImageBackground, Dimensions, StatusBar, KeyboardAvoidingView } from "react-native";
import { Block, Checkbox, Text} from "galio-framework";
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

const RegisterField = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleButtonClick = () => {
  console.log(isChecked);
  console.log(user_name);
  console.log(user_email);
  console.log(user_password);
  }

  const [user_name, setName] = useState('');
  const [user_email, setEmail] = useState('');
  const [user_password, setPassword] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleNameChange = (text) => {
    setName(text);
  };

  return (
    <Block safe flex middle>
    <Block style={styles.registerContainer}>
      <Block flex>
        <Block flex={0.17} middle>
          <Text color="#8898AA" size={16}>
           Regístrate de forma clásica
          </Text>
        </Block>
        <Block flex center>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
            enabled
          >
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
              <Input
                borderless
                placeholder="Nombre"
                iconContent={
                  <Icon
                    size={16}
                    color={argonTheme.COLORS.ICON}
                    name="hat-3"
                    family="ArgonExtra"
                    style={styles.inputIcons}
                  />
                }
                onChangeText={handleNameChange}
              />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
              <Input
                borderless
                placeholder="Email"
                iconContent={
                  <Icon
                    size={16}
                    color={argonTheme.COLORS.ICON}
                    name="ic_mail_24px"
                    family="ArgonExtra"
                    style={styles.inputIcons}r
                  />
                }
                onChangeText={handleEmailChange}
              />
            </Block>
            <Block width={width * 0.8}>
              <Input
                password
                borderless
                placeholder="Contrasena"
                iconContent={
                  <Icon
                    size={16}
                    color={argonTheme.COLORS.ICON}
                    name="padlock-unlocked"
                    family="ArgonExtra"
                    style={styles.inputIcons}
                  />
                }
                onChangeText={handlePasswordChange}
              />
            </Block>
            <Block row width={width * 0.75}>
              <Checkbox
                value={isChecked}
                onChange={handleCheckboxChange}
                checkboxStyle={{
                  borderWidth: 3
                }}
                color={argonTheme.COLORS.PRIMARY}
                label="He leído y acepto la"
              />
              <Button
                style={{ width: 100 }}
                color="transparent"
                textStyle={{
                  color: argonTheme.COLORS.PRIMARY,
                  fontSize: 13
                }}
              >
                Politica de Privacidad
              </Button>
            </Block>
            <Block middle>
              <Button color={isChecked ? 'primary' : 'gray'} style={styles.createButton} onPress={handleButtonClick} disabled={!isChecked}>
                <Text bold size={14} color={isChecked ? argonTheme.COLORS.WHITE : 'gray'}>
                  CRIAR CUENTA
                </Text>
              </Button>
            </Block>
          </KeyboardAvoidingView>
        </Block>
      </Block>
    </Block>
  </Block>
  );
};

class Register extends React.Component {
  render() {
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <RegisterField/>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.80,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

export default Register;
