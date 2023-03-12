import {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from '../AwesomeProject/components/goalItem';
import GoalInput from '../AwesomeProject/components/goalInput';

export default function App() {
const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
     <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return <GoalItem 
                      text={itemData.item.text}
                      id={itemData.item.id}
                      onDeleteItem={deleteGoalHandler}/>
        }} />
      </View>
         
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
  paddingHorizontal: 16,
  margin: 6
 },

 goalsContainer: {
  flex: 5
 },

});