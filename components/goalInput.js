import {useState} from 'react'
import {View, Button, TextInput, StyleSheet} from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }

      function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      }

    return (
        <View style={styles.inputContainer}>
              <TextInput 
                    style={styles.textInput} 
                    value={enteredGoalText} 
                    placeholder='Your course goal!' 
                    onChangeText={goalInputHandler}/>
              <Button 
                    title='Add goal' 
                    onPress={addGoalHandler}/>
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:24,
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
       },
      
       textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
       },
    });