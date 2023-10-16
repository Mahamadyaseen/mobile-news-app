import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, setNewsData } from "../src/redux/variable-slice";
import { StatusBar } from "react-native-web";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Homepage(props) {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.reducer.news);
  const loading = useSelector((state) => state.reducer.isloading);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#009387" />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView>
          {newsData.map((item, index) => {
            return (
              <View key={index} style={styles.con}>
                {/* <Image
                source={require("./assets/poster.jpg")}
                style={styles.poster}
              /> */}
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtext}>Author : {item.title}</Text>
                <View style={styles.btnCon}>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate("DetailsPage");
                      dispatch(setNewsData(item));
                    }}
                    style={styles.btn}
                  >
                    <Text style={styles.btnText}>Learn More</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      )}
      {/* <View style={styles.main}>
        <FlatList
          style={styles.list}
          data={newsData}
          numColumns={2}
          renderItem={(item) => {
            return (
              <View style={styles.con}>
                <Image
                  style={styles.poster}
                  source={{
                    uri: "./assets/poster.png",
                  }}
                />
                <Text style={styles.title}>{item.title}</Text>
              </View>
            );
          }}
        />
      </View> */}
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
