import React, {useState} from "react";
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";


const TodoTemplate = () => {

  /*
      리액트는 부모컴포넌트에서 자식컴포넌트로의 데이터이동이 반대보다 쉽기 때문에
      할 일 데이터는 상위부모컴포넌트에서 처리하는것이 좋다
   */
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: '장보기',
      done: false
    },
    {
      id: 2,
      title: '저녁먹기',
      done: true
    },
    {
      id: 3,
      title: '수다떨기',
      done: false
    },

  ]);

  // 데이터 상향식 전달을 위해 부모가 자식에게 함수를 하나 전달
  const addTodo = (todoText) => {
    // console.log('할 일 등록 함수를 todotemplate에서 실행!');
    console.log('todoText: ', todoText);

    const makeNewId = () => {
      if (todoList.length === 0) return 1;
      return todoList[todoList.length - 1].id + 1;
    };

    const newTodo = {
      id: makeNewId(),
      title: todoText,
      done: false
    };

    // todoList.push(newTodo);

    /*
        상태변수의 변경은 오로지 setter를 통해서만 가능
        상태값이 변경감지가 되면 리액트는 렌더링을 다시 시작합니다.
        다만 상태변수가 const형태로 불변성을 띄기 때문에
        기존의 상태값을 바꾸는 것은 불가능하고
        새로운 상태를 만들어서 바꿔야 합니다.
     */

    setTodoList(prevState => [...prevState, newTodo]);
  };


  return (
    <div className='TodoTemplate'>
      <TodoHeader />
      <TodoMain todoList={todoList} />
      <TodoInput onAdd={addTodo} />
    </div>
  );
};

export default TodoTemplate;