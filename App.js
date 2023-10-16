import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
  Alert,
  Animated,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import LandingPage from "./screens/LandingPage";
// import Loginpage from "./screens/LoginPage";
// import TabNavigation from "./screens/TabNavigation";
// import DrawerScreen from "./screens/DrawerScreen";
import Homepage from "./screens/Homepage";
import { Provider } from "react-redux";
// store.js
import createSagaMiddleware from "redux-saga";
import newsReducer from "./src/redux/variable-slice";
import watchNews from "./src/redux/saga";
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import NewsDetailsPage from "./screens/NewsDetailsPage";
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  reducer: newsReducer,
  middleware: [sagaMiddleware],
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchNews);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerShown: true,
              }}
              name="Home"
              component={Homepage}
            />
            <Stack.Screen
              options={{
                headerShown: true,
              }}
              name="DetailsPage"
              component={NewsDetailsPage}
            />
            {/* <Stack.Screen  options={
        {
          headerShown: false
      }
      }
      name='Home' component={DrawerScreen}/> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  headers: {
    backgroundColor: "lightgray",
    padding: 20,
    marginTop: 10,
  },
  sections: {
    width: "100%",
  },
  names: {
    backgroundColor: "lightpink",
    margin: 5,
    textAlign: "center",
  },
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
