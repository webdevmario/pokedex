import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Switch, Route } from './routing';

import Home from './Home';
import Pokemon from './Pokemon';

// import './Main.css';

export default function Main() {

  // state management
  const [currPokemon, setCurrPokemon] = useState({});

  // onload
  useEffect(() => {
    console.log('use effect - on load');
  }, []);

  function selectPokemon(selectedPokemon) {
    setCurrPokemon(selectedPokemon);
  }

  return (
    <View style={styles.container}>
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} selectPokemon={ selectPokemon } />} />
          <Route exact path="/pokemon" render={props => <Pokemon {...props} currPokemon={currPokemon} />} />
        </Switch>
      </Router>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    padding: 50
  },
});
