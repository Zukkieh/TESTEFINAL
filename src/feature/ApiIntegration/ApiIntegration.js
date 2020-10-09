import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

const ApiIntegration = () => {

    const people = useStoreState(state => state.peopleModel.people.people);
    const setPeople = useStoreActions(state => state.peopleModel.people.setPeople);

    console.log(people)

    useEffect(() => {
        if(!people.length)
            setPeople();
    }, [])

    return (
        <>
            <div>
                <button onClick={() => setPeople()}>Refresh</button>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {
                    people.length !== 0 && people.map((person, index) => (
                        <span key={index}>
                            {person.name}
                        </span>
                    ))
                }
            </div>
        </>
    );
}

export default ApiIntegration;
