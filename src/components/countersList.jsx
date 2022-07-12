import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: "Ненужная вещь", price: "200" },
        { id: 1, value: 4, name: "Ложка" },
        { id: 2, value: 0, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" },
    ];

    const [counters, setCounters] = useState(initialState);

    const handleIncrement = (id) => {
        const indexChange = counters.findIndex((el) => el.id === id);
        counters[indexChange].value += 1
        let newState = [...counters]
        setCounters( newState);
    };

    const handleDecrement = (id) => {
        const indexChange = counters.findIndex((el) => el.id === id);
        if (counters[indexChange].value > 0) {
            counters[indexChange].value -= 1
        }
        let newState = [...counters]
        setCounters(newState);
    };

    const handleDelete = (id) => {
        const newCounters = counters.filter((c) => c.id !== id);
        setCounters(newCounters);
    };
    const handleReset = () => {
        setCounters(initialState);
        console.log("handle reset");
    };

    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onDelete={handleDelete}
                    {...count} />
            ))}
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={handleReset}
            >
                Сброс
            </button>
        </>
    );
};
export default CountersList;
