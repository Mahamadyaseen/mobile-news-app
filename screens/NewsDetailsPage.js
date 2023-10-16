import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { StatusBar } from "react-native-web";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewsDetailsPage(props) {
  const newsData = useSelector((state) => state.reducer.newsData);

  console.log(newsData);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#009387" />
      <View>
        <View style={styles.con}>
          <Text style={styles.title}>{newsData.title}</Text>
          <Text style={styles.subtext}>Author : {newsData.title}</Text>
          <View style={styles.btnCon}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("Home");
              }}
              style={styles.btn}
            >
              <Text style={styles.btnText}>Go back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  poster: {
    width: 150,
    height: 150,
  },
  main: {
    flex: 1,
  },
  btnCon: {
    padding: 20,
    marginTop: 70,
    paddingStart: 100,
    justifyContent: "flex-end",
  },
  btn: {
    backgroundColor: "#009387",
    height: 50,
    width: 150,
    borderRadius: 50,
  },
  btnText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    color: "white",
  },
  list: {
    // backgroundColor:'black',
    //justifyContent:'center',
    textAlign: "center",
    margin: 2,
  },
  con: {
    margin: "2%",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    backgroundColor: "lightgray",
  },
  title: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  subtext: {
    textAlign: "center",
    fontSize: 15,
  },
});
