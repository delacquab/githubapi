import React from 'react';

// import { Container } from './styles';

export default function Repo({ repos }) {
    return (
        <div>
            {repos.map(repo => {
                return (
                    <container data-test="repositorio">
                        <h3>{repo.name}</h3>
                        <div style={{ display: "flex" }}>
                            <img style={{ width: "50px", height: "50px" }} src={repo.owner.avatar_url}></img>
                            <div>
                                <h3>{repo.name}</h3>
                                <p>Stars: {repo.stargazers_count}</p>
                            </div>
                        </div>
                        <a href={repo.html_url}>{repo.html_url}</a>
                        <p>Linguagem: {repo.language}</p>
                    </container>
                )
            })}
        </div>
    );
}
