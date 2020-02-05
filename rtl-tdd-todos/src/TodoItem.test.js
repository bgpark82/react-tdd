import React from 'react'
import TodoItem from './TodoItem';
import { render, fireEvent } from '@testing-library/react';

describe('<TodoItem/>',()=>{
    const sampleTodo ={
        id:1,
        text:'TDD 배우기',
        done:false
    };

    const setup =(props={})=>{
        const initialProps = {todo : sampleTodo};
        const utils = render(<TodoItem {...initialProps} {...props}/>);
        const {getByText} = utils;
        const todo = props.todo || initialProps.todo;
        const span = getByText(todo.text);
        const button = getByText('삭제');
        return {
            ...utils, span, button
        }
    }

    it('span과 button 확인',()=>{
        const { span, button } = setup();
        expect(span).toBeTruthy();
        expect(button).toBeTruthy();
    })

    it('done이 true면 삭제선 그리기',()=>{
        const {span} = setup({todo: {...sampleTodo, done: true}})
        expect(span).toHaveStyle('text-decoration: line-through;');
    })

    it('done이 false면 삭제선 안그리기',()=>{
        const {span} = setup({todo:{...sampleTodo, done:false}})
        expect(span).not.toHaveStyle('text-decoration: line-through;');
    })

    it('onToggle 실행',()=>{
        const onToggle = jest.fn();
        const {span} = setup({onToggle})
        fireEvent.click(span)
        expect(onToggle).toBeCalledWith(sampleTodo.id);
    })

    it('onRemove 실행',()=>{
        const onRemove = jest.fn();
        const {button} = setup({onRemove})
        fireEvent.click(button);
        expect(onRemove).toBeCalledWith(sampleTodo.id);
    })
})