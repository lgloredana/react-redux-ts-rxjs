import * as React from "react";
import {ItemTodoGoal} from "./ItemTodoGoal";

type ListProps = {
    items: Array<ItemTodoGoal>,
    toggle: (todoId:number) => void,
    removeItem: (item:ItemTodoGoal) => void
}

const List:React.FC<ListProps> = ({items, toggle, removeItem}) => {
    return( <ul>
        {items.map((item:ItemTodoGoal)  => (
            <li key={item.id}
                onClick={ () => toggle && toggle(item.id)}
                style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
                    <span>
                        {item.name}
                    </span>
                <button onClick={() => removeItem(item)}>X</button>
            </li>
        ))}
    </ul>)
};

export default List