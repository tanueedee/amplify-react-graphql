import React from 'react';
import logo from './logo.svg';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator, Button, Heading, Image, View, Card } from '@aws-amplify/ui-react';

const App = ({ signOut }) => {
  const handleSignOut = () => {
    signOut();
  };

  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);
