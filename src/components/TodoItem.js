import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#333",
      color: "white",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  markComplete = () => {
    console.log(this.props);
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <StyledCheckbox 
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
            checked={this.props.todo.completed ? true : false}
          />{" "}
          {title}
          <BtnStyle onClick={this.props.delTodo.bind(this, id)}>X</BtnStyle>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

// Styled Components
const BtnStyle = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px 7px;
  cursor: pointer;
  float: right;
  border-radius: 10%;
  font-size: 16px;

  &:hover {
    background: firebrick;
    color: #000000;
    cursor: pointer;
  }
`;

const StyledCheckbox = styled.input`
  display: inline-block;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export default TodoItem;
