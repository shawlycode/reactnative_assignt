import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerText}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          style={styles.icon}
        />
        <Text style={styles.editText}>Edit Profile</Text>
      </View>
      <View style={styles.profile}>
        <Image source={require("./assets/gift.jpg")} style={styles.img} />
        <Ionicons
          name="camera-outline"
          size={26}
          color="black"
          style={styles.camIcon}
        />
      </View>
      <KeyboardAwareScrollView>
        <View style={styles.form}>
          <Text style={styles.formText}>School</Text>
          <TextInput placeholder="" style={styles.placeholder} />
          <Text style={styles.formText}>Email Address</Text>
          <TextInput placeholder="" style={styles.placeholder} />
          <Text style={{ color: "#04D9FF", fontSize: 22 }}>Name</Text>
          <TextInput placeholder="" style={styles.placeholder} />
          <Text style={{ color: "#04D9FF", fontSize: 22 }}>Nick Name</Text>
          <TextInput placeholder="" style={styles.placeholder} />
          <Text style={{ color: "#04D9FF", fontSize: 22 }}>
            Emergency Contact
          </Text>
          <View style={styles.emergency}>
            <TextInput placeholder="" style={styles.emergencyText} />
            <AntDesign name="contacts" size={28} color="grey" />
          </View>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity>
            <Text style={styles.btnText}>UPDATE PROFILE</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#E5E7E9",
  },
  headerText: {
    flex: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    padding: 10,
  },
  editText: {
    flex: 90,
    fontSize: 28,
    alignItems: "flex-start",
    textAlign: "center",
    paddingRight: 50,
    marginBottom: 0,
  },
  icon: {
    flex: 10,
    padding: 10,
  },
  emergency: {
    flexDirection: "row",
  },
  emergencyText: {
    flex: 90,
    fontSize: 22,
  },
  profile: {
    flex: 30,
    position: "relative",
    marginBottom: 50,

    alignItems: "center",
    marginTop: 0,
  },
  camIcon: {
    position: "absolute",
    marginTop: 120,
    right: 180,
    backgroundColor: "#04D9FF",
    width: 40,
    height: 40,
    padding: 7,
    color: "white",
    borderRadius: 50,
  },
  form: {
    flex: 60,
    alignItems: "flex-start",
    padding: 20,
  },
  formText: {
    fontSize: 24,
    color: "grey",
  },
  btn: {
    flex: 20,
    margin: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    backgroundColor: "#04D9FF",
    height: 60,
    width: 300,
    padding: 17,
    textAlign: "center",
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    borderRadius: 10,
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  placeholder: {
    fontSize: 22,
    marginBottom: 5,
    padding: 5,
    width: 400,
    borderRadius: 10,
  },
});
export default App;
