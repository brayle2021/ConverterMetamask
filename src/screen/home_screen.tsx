import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";

const NO_ACCOUNT = "Don’t have an account yet?";

class HomeScreen extends React.Component {
  
  constructor() {
    super();

    this.state = {
      convert1: "",
      convert2: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
      
        <View style={styles.styleLogo}>
          <View style={styles.styleBg}>
            <View style={styles.styleBg2}>
              <Text style={styles.input2}>NEP </Text>
              <TextInput
                style={styles.input}
                placeholder={"NEP"}
                placeholderTextColor="#000"
                value={this.state.convert1}
                keyboardType="numeric"
                onChangeText={(text) => this.handleNEPTextchange(text)}
                value={this.state.convert1}
                maxLength={13} //setting limit of input
                textContentType="number"
              />
            </View>

            <View style={styles.styleBg2}>
              <Text style={styles.input2}>BUSD</Text>
              <TextInput
                style={styles.input}
                placeholder={"BUSD"}
                placeholderTextColor="#000"
                value={this.state.convert2}
                keyboardType="numeric"
                onChangeText={(text) => this.handleBUSDTextchange(text)}
                value={this.state.convert2}
                maxLength={13} //setting limit of input
                textContentType="number"
              />
            </View>
              <Text
                style={ styles.txtcheckwallet}
                onPress={() => this.props.navigation.navigate("wallet")}
              >
                Check wallet details
              </Text>
          </View>
        </View>
      </View>
    );
  }

  handleNEPTextchange(text) {
    console.log(text);
    let newText = "";
    let decimaltext = ""
    let numbers = "0123456789";

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
        decimaltext = newText * 3;
      } else {
        // your call back function
        alert("please enter numbers only");
      }
    }
    this.setState({ convert1: newText, convert2: decimaltext });
  }

  handleBUSDTextchange(text) {
    console.log(text);
    let newText = "";
    let numbers = "0123456789";
    let decimaltext = "";

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
        decimaltext = newText / 3;
      } else {
        // your call back function
        alert("please enter numbers only");
      }
    }
    this.setState({ convert2: newText, convert1: parseFloat(decimaltext).toFixed(2) });
  }
}

const styles = StyleSheet.create({

  styleLogo: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "#00062e",
    height:'100%', width:'100%'
    },

  input: {
    backgroundColor: "#fff",
    height: 50,
    width: "50%",
    margin: -2,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#001fe8",
    padding: 10,
  },
  input2: {
    backgroundColor: "#00ccff",
    height: 50,
    width: "15%",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#001fe8",
    padding: 10,
  },

  styleBg2: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginTop:70,
  },

  styleBg3: { width: "50%", marginTop: 20, alignItems: "center" },

  styleBg: {
    backgroundColor: "#00062e",
    height: 500,
    width: 650,
    marginTop: '15%',
    alignItems: "center",
    borderRadius: 15,
    flex:1
  },
 
  title: {fontSize: 20,
    padding: 20,fontWeight: "bold",
  },
  txtcheckwallet: { color: "#001fe8", fontSize: 15, fontWeight: "bold",
    margin: 30,},
});

export default HomeScreen;
