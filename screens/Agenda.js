import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Block, theme } from 'galio-framework';
import CardUpd from '../components/CardUpd';
import articles from '../constants/articles';
const { width } = Dimensions.get('screen');

function SearchBar() {
  return <VStack my="4" space={5} w="100%" maxW="300px" divider={<Box px="2">
    <Divider />
  </Box>}>
    <VStack w="100%" space={5} alignSelf="center">
      <Heading fontSize="lg">Busque su peluquería:</Heading>
      <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
    </VStack>
  </VStack>;
}
class Agenda extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          <Center flex={1} px="2">
            <SearchBar />
          </Center>
          <Block flex row>
            <CardUpd item={articles[0]} style={{ marginRight: theme.SIZES.BASE }} horizontal />
          </Block>
          <CardUpd item={articles[1]} horizontal />

        </Block>
        <Block flex>
          <Block flex row>
            <CardUpd item={articles[2]} horizontal />
          </Block>
          <CardUpd item={articles[3]} horizontal />

        </Block>
        <Block flex row>
          <CardUpd item={articles[4]} horizontal />
        </Block>
        <Block flex row>
          <CardUpd item={articles[5]} horizontal />
        </Block>

        <Block flex row>
          <CardUpd item={articles[6]} horizontal />
        </Block>

        <Block flex row>
          <CardUpd item={articles[7]} horizontal />
        </Block>


      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Agenda;