import React from 'react'
import { render, getByTestId, fireEvent, getAllByText } from '@testing-library/react'
import TodoApp from './TodoApp'

describe('<TodoApp/>', () => {
    
    it('TodoForm과 TodoList 렌더링 확인',()=>{
        // given
        const {getByText, getByTestId} = render(<TodoApp/>)
        // when
        getByText('등록')
        getByTestId('TodoList')
        // then
    })

    it('두개의 기본 todos 렌더',()=>{
        const {getByText} = render(<TodoApp/>)
        getByText('TDD 배우기')
        getByText('react-testing-library 사용하기')
    })

    it('새로운 todo 생성',()=>{
        const {getByPlaceholderText, getByText} = render(<TodoApp />)
        fireEvent.change(getByPlaceholderText('할 일을 입력하세요'),{
            target:{
                value: '새 항목 추가하기'
            }
        });
        fireEvent.click(getByText('등록'))
        getByText('새 항목 추가하기')
    })

    it('todo 토글',()=>{
        // given
        const {getByText} = render(<TodoApp/>);
        const todoText = getByText('TDD 배우기')
        expect(todoText).toHaveStyle('text-decoration: line-through')

        fireEvent.click(todoText)
        expect(todoText).not.toHaveStyle('text-decoration: line-through')

        fireEvent.click(todoText)
        expect(todoText).toHaveStyle('text-decoration: line-through')
        
    })

    it('removes todo', () => {
        const { getByText, queryByText } = render(<TodoApp />);
        const todoText = getByText('TDD 배우기');
        const removeButton = todoText.nextSibling;
        fireEvent.click(removeButton);
        expect(todoText).not.toBeInTheDocument(); // 페이지에서 사라졌음을 의미함

        const removedText = queryByText('TDD 배우기');
        expect(removedText).toBeNull();
      });
})

