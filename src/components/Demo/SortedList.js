import React, { useMemo } from 'react';
const SortedList = props => {
    const { items } = props;

    const sortedList = useMemo(() => {
        console.log("items sorted check");
        return props.items.sort((a, b) => a - b);
    }, [items]); // whenever we receive a new set of items they are then resorted

    console.log("list running, sorting done. lets try and avoid excessive rendering of this component")

    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {sortedList.map(item => (
                     <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default React.memo(SortedList);