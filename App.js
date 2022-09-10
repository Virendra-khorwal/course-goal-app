
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  const courseGoalHandler = (enteredText) => {
    if (enteredText === '') {
      return
    }
    setCourseGoals((prevGoals) => 
      [...prevGoals, {
        text: enteredText, id: Math.random().toString(),
      }]
      );
  }

  const deleteGoal = (id) => (
    setCourseGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
  );

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#FFB433" onPress={() => setModalVisible(true)} />
      <GoalInput visible={isModalVisible} onCourseGoalHandler={courseGoalHandler} onCancel={()=>setModalVisible(false)}  />
      <View style={styles.listContainer} >
        <FlatList data={courseGoals} keyExtractor={(itemData) => itemData.id} renderItem={(itemData) => (
          <GoalItem text={itemData.item.text} onDeleteHandler={deleteGoal} id={itemData.item.id} />
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,

  },

  listContainer: {
    flex: 5,
    marginTop: 16,
    paddingTop: 16,
    borderTopColor: "#FFB433",
    borderTopWidth: 2
  },

});
