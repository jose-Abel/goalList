import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
      setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle}]);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    });
  }

  return (
    <View style={styles.screen}>

      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />

        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler}/>

        <FlatList 
          data={courseGoals}

          keyExtractor={(item, index) => item.id}
          
          renderItem={itemData => 
            <GoalItem              
              id={itemData.item.id}

              onDelete={removeGoalHandler}

              title={itemData.item.value}
              />
          }
        />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});