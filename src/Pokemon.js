import React from 'react';
import { View, Text, Image, Platform, Button, Share } from 'react-native';

import { Link } from './routing';

import pokemon from './pokemonStore';

// const examplePokemon = pokemon[0];

const Pokemon = props => {
  const { currPokemon } = props;

  console.log('curr pokemon', currPokemon);

  const handlePress = () => {
    Share.share({
      message: 'Check out my favorite Pokemon!',
      url: currPokemon.url
    });
  };

  const backButton = (
    <View>
      <Link to="/">
        <Text>Go Back</Text>
      </Link>
    </View>
  );

  if (!Object.keys(currPokemon).length) {
    return (
      <View>
        {backButton}
        <Text>No Pokemon Selected.</Text>
      </View>
    );
  }

  return (
    <View>
      {backButton}
      <View>
        <Text>{`#${currPokemon.number}`}</Text>
      </View>
      <View>
        <Text>{`Name: ${currPokemon.name}`}</Text>
      </View>
      <View>
        <Text>{`Type: ${currPokemon.type}`}</Text>
      </View>
      <View>
        <Image style={{ width: 50, height: 50 }} source={{ uri: currPokemon.photoUrl }}></Image>
      </View>
      {
        Platform.OS !== 'web' &&
        <View>
          <Button title="share" onPress={handlePress} />
        </View>
      }
    </View>
  );
};

export default Pokemon;
