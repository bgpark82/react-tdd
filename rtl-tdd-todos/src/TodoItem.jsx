import React, { useState, useEffect, useCallback } from 'react'

const TodoItem = ({todo, onToggle, onRemove}) => {
    const {id, text, done} = todo;
    const toggle = useCallback(() => onToggle(id), [id, onToggle]);
    const remove = useCallback(() => onRemove(id), [id, onRemove]);

    return (
        <div>
            <span 
                style={{textDecoration: done ? 'line-through':'none'}}
                onClick={toggle}>{text}</span>
            <button
                onClick={remove}>삭제</button>
        </div>
    )
}

export default React.memo(TodoItem)
