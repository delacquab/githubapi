const URL = 'https://api.github.com/';

export async function getUsers(name) {
    console.log('antes');
    const returno = await fetch(`${URL}users/${name}/repos`, { mode: "cors" })
        .then(r => r.json())
        .catch(e => {
            console.log("Erro no get", e);
        });

    console.log('xxx');
    console.log(returno);
    console.log('depois');
    return returno
};


