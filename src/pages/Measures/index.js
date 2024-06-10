import { StyleSheet, Text, View, Switch, ScrollView } from 'react-native';
import Body from "react-native-body-highlighter"
import { useState } from 'react';
import Toast from 'react-native-toast-message';

export default function Measures() {
  const [bodyPartSelected, setBodyPartSelected] = useState({
    slug: "biceps",
    intensity: 2,
  });

  const [isBackSideEnabled, setIsBackSideEnabled] = useState(false);
  const [isMale, setIsMale] = useState(true);
  const toggleSwitch = () =>
    setIsBackSideEnabled((previousState) => !previousState);

  const toggleGenderSwitch = () => setIsMale((previousState) => !previousState);

  function showMessage(e) {
    setBodyPartSelected({ slug: e.slug, intensity: 2 });
    Toast.show({
      type: 'success',
      text1: e.slug,
      text2: `${getMeasures(e.slug)} cm`
    });
  };

  function getMeasures(e) {
    var measure = 0.0;

    switch (e) {
      case "chest":
        measure = 25.1;
        break;
      case "abs":
        measure = 12.3;
        break;
      case "upper-back":
        measure = 15.2;
        break;
      case "lower-back":
        measure = 32.0;
        break;
      default:
        measure = 0.0
    }
    return measure;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.switchContainer}>
        <View style={styles.switch}>
          <Text style={styles.innerText}>Side ({isBackSideEnabled ? "Back" : "Front"})</Text>
          <Switch onValueChange={toggleSwitch} value={isBackSideEnabled} />
        </View>
        <View style={styles.switch}>
          <Text style={styles.innerText}>Gender ({isMale ? "Male" : "Female"})</Text>
          <Switch onValueChange={toggleGenderSwitch} value={isMale} />
        </View>
      </View>
      <View style={styles.container}>
        <Body
          data={[
            { slug: "chest", intensity: 1 },
            { slug: "abs", intensity: 2 },
            { slug: "upper-back", intensity: 1 },
            { slug: "lower-back", intensity: 2 },
            bodyPartSelected,
          ]}
          onBodyPartPress={(e) =>
            showMessage(e)
          }
          gender={isMale ? "male" : "female"}
          side={isBackSideEnabled ? "back" : "front"}
          scale={1.7}
        />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040316',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchContainer: {
    flexDirection: "row",
    gap: 30,
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    backgroundColor: '#040316',
  },
  switch: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#040316',
  },
  innerText: {
    color: '#fff',
  },
});

