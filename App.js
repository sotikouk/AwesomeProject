import {useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from '../AwesomeProject/components/goalItem';
import GoalInput from '../AwesomeProject/components/goalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
    <Button title='Add new goal' color='#a065ec' onPress={startAddGoalHandler}/>
     <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return <GoalItem 
                      text={itemData.item.text}
                      id={itemData.item.id}
                      onDeleteItem={deleteGoalHandler}/>
        }} />
      </View>
         
    </View>
    </>
  );
}

const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
  backgroundColor: '#1e085a',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 80,
  paddingHorizontal: 16,
 },

});