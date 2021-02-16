import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  display:flex;
  flex-direction:row;
`;
const Title = styled.h3`
  padding: 8px;
  margin: auto;
  padding-top: 45px;
  text-align:center;
`;
const TaskList = styled.div`
    transition: background-color 0.25s ease;
    background-color:${(props) => (props.isDraggingOver ? 'lightpink' : 'white')};
  padding: 8px;
  flex-grow:1;
  min-height:100px;
  display:flex;
`;

export default class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id} direction="horizontal">
                    {(provided, snapshot) => (
                        <TaskList ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                            {this.props.tasks.map((task, index) => (
                                <Task key={task.id} task={task} index={index} />
                            ))}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
        );
    }
}