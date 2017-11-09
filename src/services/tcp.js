//const net = new WebTCP('localhost', 9999)
//import net from 'net'
export const fetchBtns = (host, port) => {
    return fetch(`http://${host}:${port}/api/trigger`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((response) => response.json())
        .then(res => {
            return  res.triggers
                .filter(t => t.type === 'TPC Button Event')
                //.map(c => console.log('c ', c))
                .map(t => ({
                    id: t.num,
                    name: t.trigger_text.split('\"')[1],
                    group: t.group_num,
                    command: t.num,
                    color: "#333333",
                    colorDown: "#44E16C",
                    //off: false,
                    toggle: false,
                    size: 1,
                }))
        }
    )
};

export const tcp = (command, host, port) => {
    console.log('TCP', command, host, port);

    return fetch(`http://${host}:${port}/api/trigger`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "conditions": false,
                "ignore_proj": true,
                "num": Number.parseInt(command)
            })
        }
    )

    /*  var client = net.createConnection(8888, '192.168.1.2');

      client.on('error', function(error) {
          console.log(error)
      });
  // */
//
//     const ws = new WebSocket(`ws://${host}:${port}`);
//     const ws1 = new WebSocket(`ws://192.168.1.99:1`);
//
//
//     ws1.onopen = () => {
//         // connection opened
//         console.log('send to ws' , word)
//         ws1.send(word); // send a message
//     };
//     //const ws = new WebSocket('ws://echo.websocket.org/');
//
//     //setTimeout(console.log('ws', ws), 200)
//     //console.log('ws', ws)*!/
//
//     ws.onopen = () => {
//         // connection opened
//         console.log('send to ws' , word)
//         ws.send(word); // send a message
//     };
//     ws.onmessage = function (e) {
//         console.log('Server: ' + e.data);
//     };
//     ws.onerror = (e) => {
//         // an error occurred
//         console.log(e.message);
//     };
//
//     ws.onclose = (e) => {
//         // connection closed
//         console.log(e.code, e.reason);
//     };
};