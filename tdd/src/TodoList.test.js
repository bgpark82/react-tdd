import React from 'react'
import TodoList from './TodoList'
import { render, fireEvent, getByText, getAllByText } from '@testing-library/react'

describe('<TodoList/>',()=>{

    // 테스트 데이터
    const sampleTodos = [
        {
            id: 1,
            text: 'TDD 배우기',
            done: true
        },
        {
            id: 2,
            text: 'react-testing-library 사용하기',
            done: true
        }
    ]

   it('renders todos properly', () => {
    const { getByText } = render(<TodoList todos={sampleTodos} />);
    getByText(sampleTodos[0].text);
    getByText(sampleTodos[1].text);
  });

  it('onToggle과 onRemove 호출',()=>{
      // given 
      const onToggle = jest.fn(); // mock 함수 준비
      const onRemove = jest.fn();
      const {getByText, getAllByText} = render(<TodoList todos={sampleTodos} onRemove={onRemove} onToggle={onToggle}/>);

      // when
      fireEvent.click(getByText(sampleTodos[0].text))
      fireEvent.click(getAllByText('삭제')[0])

      // then
      expect(onToggle).toBeCalledWith(sampleTodos[0].id)
      expect(onRemove).toBeCalledWith(sampleTodos[0].id)
  })
})