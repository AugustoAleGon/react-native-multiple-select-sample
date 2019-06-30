import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import MultiSelect from 'react-native-multiple-select'

const items = [{
  id: '92iijs7yta',
  name: 'Ondo'
}, {
  id: 'a0s0a8ssbsd',
  name: 'Ogun'
}, {
  id: '16hbajsabsd',
  name: 'Calabar'
}, {
  id: 'nahs75a5sg',
  name: 'Lagos'
}, {
  id: '667atsas',
  name: 'Maiduguri'
}, {
  id: 'hsyasajs',
  name: 'Anambra'
}, {
  id: 'djsjudksjd',
  name: 'Benue'
}, {
  id: 'sdhyaysdj',
  name: 'Kaduna'
}, {
  id: 'suudydjsjd',
  name: 'Abuja'
}]

export default class App extends Component {
  state = {
    selectedItems: []
  }

  onSelectedItemsChange = () => {
    const { selectedItems } = this.state
    this.setState({ selectedItems })
  }

  render () {
    const { selectedItems } = this.props
    return (
      <View style={styles.container}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey='id'
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText='Pick Items'
          searchInputPlaceholderText='Search Items...'
          onChangeInput={(text) => console.warn(text)}
          altFontFamily='ProximaNova-Light'
          tagRemoveIconColor='#CCC'
          tagBorderColor='#CCC'
          tagTextColor='#CCC'
          selectedItemTextColor='#CCC'
          selectedItemIconColor='#CCC'
          itemTextColor='#000'
          displayKey='name'
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor='#CCC'
          submitButtonText='Submit'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
