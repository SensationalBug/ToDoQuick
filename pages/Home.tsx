import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../components/Home/Header';
import Content from '../components/Home/Content';

const Home = () => {
  return (
    <ScrollView>
      <Header />
      <Content />
    </ScrollView>
  );
};

export default Home;
