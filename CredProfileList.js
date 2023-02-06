import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const credProfileListItem = ({ item }) => (
<View style={styles.cred_profile_list_item}>
<Image
    style={styles.cred_icon}
    source={{uri: item.cred_icon}}
   />
<Text style={styles.cred_title}>{item.cred_title}</Text>
<Text style={styles.cred_main_title}>{item.cred_main_title}</Text>
<Image
    style={styles.content_icon}
    source={{uri: item.content_icon}}
   />
<Text style={styles.last_paid}>{item.last_paid}</Text>
<Text style={styles.price}>{item.price}</Text>
<Image
    style={styles.content_icon2}
    source={{uri: item.content_icon2}}
   />
<Text style={styles.view_all}>{item.view_all}</Text>
<Text style={styles.transactions}>{item.transactions}</Text>
</View>
  );

const CredProfileList = ({ item }) => (
<FlatList
    style={styles.cred_profile_list}
    data={item}
    renderItem={credProfileListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default CredProfileList;

const styles = StyleSheet.create({
cred_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
cred_title: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
cred_main_title: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
content_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
last_paid: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
price: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
content_icon2: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
view_all: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
transactions: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  }
});