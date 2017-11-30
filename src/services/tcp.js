
export const tcp = (command, host, port) => {
    return fetch(`http://${host}:${port}/api`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: command
        }
    )
};