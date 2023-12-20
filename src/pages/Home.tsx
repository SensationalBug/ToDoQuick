import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../components/Home/Header';
import Content from '../components/Home/Content';

const Home = ({navigation}: any) => {
  return (
    <ScrollView>
      <Header />
      <Content navigation={navigation} />
    </ScrollView>
  );
};

export default Home;
