import React from 'react'
import TodoForm from './TodoForm'
import { render, fireEvent } from '@testing-library/react'

describe('<TodoForm/>',()=>{

    const setup = (props = {}) =>{
        const utils = render(<TodoForm {...props}/>);
        const {getByText, getByPlaceholderText} = utils;
        const input = getByPlaceholderText('할 일을 입력하세요');
        const button = getByText('등록');
        const value = 'TDD 배우기'
        return {
            ...utils,
            input,
            button,
            value
        }
    }

    it('has input and a button',()=>{
        const {input, button} = setup();
        expect(input).toBeTruthy(); // input 확인
        expect(button).toBeTruthy(); // button 확인
    });

    it('input 값 변경', () => {
        const { input, value } = setup();
        fireEvent.change(input, {
            target: {value}
        });
        expect(input).toHaveAttribute('value', value);
    });

    it('submit 버튼 클릭 후, input 값 비워짐',()=>{
        // given
        const onInsert = jest.fn();
        const {input, button, value} = setup({onInsert});

        // when
        fireEvent.change(input,{
            target:{value}
        });
        fireEvent.click(button);
        
        // then
        expect(onInsert).toBeCalledWith(value);
        expect(input).toHaveAttribute('value','');
    })
});
