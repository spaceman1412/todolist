import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  StatusBar,
} from "react-native";
import Task from "./Task";
var i = -1;
function Homescreen(props) {
  const [text, onChangeText] = React.useState(); //text box value
  const [task, onChangeTask] = React.useState([]); //task value

  const handleTask = () => {
    console.log(task);
    console.log("i value is", i);
    i++;
    onChangeTask([...task, { ...task, value: text, id: i }]);
  };

  const handleDelete = (id) => {
    console.log("Event Handler Called", id);
    const tasks = task.filter((c) => c.id != id);
    onChangeTask(tasks);
  };

  return (
    <View style={styles.container}>
      {/*Header*/}
      <Text style={styles.text}>All task</Text>
      {/*Task List */}
      {/* {task.map((item) => {
        return (
          <Task
            text={item.value}
            key={item.id}
            onDelete={handleDelete}
            taskid={item.id}
          />
        );
      })} */}
      <Task
        text="Hello World"
        key={1}
        onDelete={handleDelete}
        taskid={1}
      ></Task>
      <Task
        text="Hello World"
        key={2}
        onDelete={handleDelete}
        taskid={2}
      ></Task>
      {/*Add task bottom */}
      <View style={styles.AddTask}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        ></TextInput>
        <Pressable style={styles.button} onPress={handleTask}>
          <Text style={(styles.text, { color: "white" })}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    paddingTop: StatusBar.currentHeight + 20,
  },
  AddTask: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    left: 20,
    borderWidth: 1,
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    margin: 12,
    width: 250,
  },
  button: {
    width: 40,
    height: 40,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    marginBottom: 10,
  },
});

export default Homescreen;
