import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({text,id, onDeleteHandler}) => {
    return (
      <View style={styles.goalItem}>
        <Pressable
        // for we use style props to show ripple effect
          android_ripple={{ color: "#074054" }}
          onPress={() => onDeleteHandler(id)}
        >
          <Text style={styles.goalText}>{text}</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#FFB433",
    marginVertical: 4,
    borderRadius: 4,
  },
  goalText: {
    color: "#fff",
    fontSize: 24,
    padding: 4,
  },
});

export default GoalItem;