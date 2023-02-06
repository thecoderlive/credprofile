import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import CredProfileList from './CredProfileList'

const CredProfile = () => (
<ScrollView style={styles.cred_profile} showsVerticalScrollIndicator={false}>
<Image
    style={styles.protect_icon}
    source={{uri: item.protect_icon}}
   />
<Text style={styles.protect_title}>{item.protect_title}</Text>
<Text style={styles.protect_main_title}>{item.protect_main_title}</Text>
<Text style={styles.protect_box_title}>{item.protect_box_title}</Text>
<Text style={styles.about_protect}>{item.about_protect}</Text>
<Image
    style={styles.protect_image}
    source={{uri: item.protect_image}}
    />
<CredProfileList item={item.cred_profile_list}/>
</ScrollView>
)

export default CredProfile;

const styles = StyleSheet.create({
protect_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
protect_title: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
protect_main_title: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
protect_box_title: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
about_protect: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
protect_image: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  }
});