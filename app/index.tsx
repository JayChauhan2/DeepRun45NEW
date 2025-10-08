import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);

  const onPress = () => {
    if (!started) {
      setStarted(true);
    }
  };

  useEffect(() => {
    let interval: number;

    if (started) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [started]);


  const formatTime = (t: number) => {
    const h = Math.floor(t / 3600);
    const m = Math.floor((t % 3600) / 60);
    const s = t % 60;
    return `${h}h ${m}m ${s}s`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.startHolder}>
      <TouchableOpacity style={styles.start} onPress={onPress}>
        <Text style={styles.startText}>
            {started ? formatTime(time) : "Start"}
          </Text></TouchableOpacity></View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  startHolder: {
    alignItems: "center",
  },
  start: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderWidth: 4,
    borderColor: "rgba(35, 62, 144, 0.6)",
    backgroundColor: "white",
    height: 200,
    width: 200,
  },
  startText: {
    color: "#233e90",
    fontSize: 40,
    fontFamily: "Helvetica",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(35, 62, 144, 0)",

  },

})