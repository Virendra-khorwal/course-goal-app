import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

const GoalInput = ({onCourseGoalHandler, visible, onCancel}) => {
    const [enteredText, setEnteredText] = useState("");

    const inputTextHandler = (enteredText) => {
      setEnteredText(enteredText);
    };

    return (
      <Modal visible={visible} animationType="slide">
        <View style={styles.inputContianer}>
          <Image style={styles.image} source={require("../assets/goal.png")} />
          <TextInput
            style={styles.textInput}
            onChangeText={inputTextHandler}
            placeholder="Enter Text here"
            value={enteredText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Add Goal"
                color="#FFB433"
                onPress={() => {
                  onCourseGoalHandler(enteredText);
                  setEnteredText("");
                }}
              />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" color="#FFB433" onPress={onCancel} />
            </View>
          </View>
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
  inputContianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    padding: 16,
    backgroundColor: "#F9DBA6",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: "100%",
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor:'#fff',
    borderRadius: 6
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 16
  },
});

export default GoalInput;