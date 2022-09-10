import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = ({onCourseGoalHandler, visible, onCancel}) => {
    const [enteredText, setEnteredText] = useState("");

    const inputTextHandler = (enteredText) => {
      setEnteredText(enteredText);
    };

    return (
      <Modal visible={visible} animationType="slide">
        <View style={styles.inputContianer}>
          <TextInput
            style={styles.textInput}
            onChangeText={inputTextHandler}
            placeholder="Enter Text here"
            value={enteredText}
          />
          <View style= {styles.buttonContainer} >
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
              <Button
                title="Cancel"
                color="#FFB433"
                onPress={onCancel}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
  inputContianer: {
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    marginBottom: 10,
    padding: 16,
  },
  textInput: {
    width: "100%",
    borderWidth: 2,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderColor: "#FFB433",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:"space-between",
    marginTop: 16

  },
  button: {
    width: 100
  }
});

export default GoalInput;