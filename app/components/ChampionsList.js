/**
 * LeaguePedia | ChampionsList.js
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */
'use strict';

import React, { Component, PropTypes, StyleSheet, Text, View, ScrollView, ListView, Image } from 'react-native';
import ChampionIcon from './ChampionIcon';
import * as _ from 'lodash';
import Dimensions from 'Dimensions';

class ChampionsList extends Component {

  /**
   * Renders champion icon.
   *
   * @param {Object} champ - Current champion.
   * @returns {ReactElement} Champion icon.
   */
  renderChamp(champ) {
    return (
        <ChampionIcon
            key={champ.id}
            id={champ.id}
            picture={champ.key}
            name={champ.name}
            dispatch={this.props.dispatch}
            version={this.props.version}
        />
    );
  }

  /**
   * Sorts champions by name and generates champions icon.
   *
   * @param {Object} champions - List of champions
   * @returns {ReactElement} Rendered list of champion icons.
   */
  renderChampionsList(champions) {
    return _.chain(champions)
        .sortBy((champ) => { return champ.name })
        .map((champ) => { return this.renderChamp(champ) })
        .value();
  }

  render() {
    const { champions } = this.props;
    const champsList = this.renderChampionsList(champions);

    return (
      <Image resizeMode="stretch" style={styles.image} source={require('../assets/background.jpg')}>
        <ScrollView>
          <View style={styles.base}>
            {champsList}
          </View>
        </ScrollView>
      </Image>
    );
  }
}

ChampionsList.propTypes = {
  champions: React.PropTypes.object,
  version: React.PropTypes.string
};

const styles = StyleSheet.create({
  base: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  image: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    flex: 1
  }
});

export default ChampionsList;
