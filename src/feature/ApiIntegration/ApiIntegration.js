import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

const ApiIntegration = () => {

    const repos = useStoreState(state => state.reposModel.repos.repos);
    const setRepos = useStoreActions(state => state.reposModel.repos.setRepos);

    
    useEffect(() => {
        console.log(repos)
        if(!repos.length)
            setRepos();
    }, [repos, setRepos])

    return (
        <>
            <div>
                <button onClick={() => setRepos()}>Refresh</button>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {
                    repos.length !== 0 && repos.map((person, index) => (
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
