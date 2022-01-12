import * as React from "react";
import { View, Pressable, Text, StyleSheet, TextInput } from "react-native";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { injected } from "../actions/connectors";
import Web3 from "web3";
import TokenListRinkeby from "../actions/token-list-rinkeby.json";
import { useState } from "react";
import useBalance from "../actions/useBalance";

import HomeScreen from "./src/screen/home_screen.tsx";

function getLibrary(provider) {
  return new Web3(provider);
}

export default function () {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Wallet />
    </Web3ReactProvider>
  );
}

function Wallet() {
  const context = useWeb3React<Web3Provider>();
  const {
    active,
    account,
    chainId,
    nativeCurrency,
    library,
    connector,
    activate,
    deactivate,
  } = useWeb3React();

  const [selectedToken, setSelectedToken] = useState(TokenListRinkeby[0]);
  const [balance] = useBalance(selectedToken.address, selectedToken.decimals);

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <View>
      <View style={styles.styleBg2}>
        {active ? (
          <View style={styles.styleBg2}>
            <Pressable style={styles.button} onPress={disconnect}>
              <Text style={styles.text}>Disconnect</Text>
            </Pressable>
          </View>
        ) : (
          <Pressable style={styles.button} onPress={connect}>
            <Text style={styles.text}>Connect to MetaMask</Text>
          </Pressable>
        )}
        {active ? <Text>Connected</Text> : <Text>Not connected</Text>}
      </View>
      <View style={styles.styleBg2}>
        {active ? (
          <View style={styles.styleBg2}>
            <Text style={styles.input}>Account: {account}</Text>
            <Text style={styles.input}>Chain ID: {chainId}</Text>
            <Text style={styles.input}>Balance: {balance}</Text>
          </View>
        ) : (
          <Text></Text>
        )}
      </View>
      <View style={styles.styleBg2}>
        <Pressable
          style={styles.button}
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        >
          <Text style={styles.text}>Back to Convertion</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#000e8f",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  input: {
    backgroundColor: "#fff",
    height: 50,
    width: "50%",
    margin: -2,
    borderWidth: 2,
    borderColor: "#001fe8",
    padding: 10,
  },
  styleBg2: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: 70,
  },

  styleBg3: { width: "50%", marginTop: 20, alignItems: "center" },

  styleBg: {
    backgroundColor: "#00062e",
    height: 500,
    width: 650,
    marginTop: "15%",
    alignItems: "center",
    borderRadius: 15,
    flex: 1,
  },
});
