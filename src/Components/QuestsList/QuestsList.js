import Item from '../ToDoItem/ToDoItem'
import styles from './QuestList.module.css'
import PropTypes from 'prop-types'

export default function QuestsList({todos}) {
  return (
    <div>
      {todos.map((list) => {
        return(
          <Item id={list.id} finished={list.checker} text={list.text} priority={list.priority}></Item>
        )
      })}
    </div>
  )
}

QuestsList.propTypes = {
  todos: PropTypes.array.isRequired,
}