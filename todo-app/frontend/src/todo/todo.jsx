import React from 'react'

import PageHeader from '../template/PageHeader'
import TodoForm from './todoForm'
import TodoList from './TodoList'

export default props => {
    return(
        <div>
            <PageHeader name="Tarefas" small="Cadastro"/>
            <TodoForm />
            <TodoList/>
        </div>
    )
}