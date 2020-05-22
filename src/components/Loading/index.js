import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container} from './styles';

export default function Loading() {
  return (
    <Container>
      <ActivityIndicator size="large" color="#0095f6" />
    </Container>
  );
}
