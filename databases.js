var Redis = require('redis-fast-driver');

var r = new Redis({
    //host: '/tmp/redis.sock', //unix domain
    host: '127.0.0.1', //can be IP or hostname
    port: 6379,
    maxRetries: 10, //reconnect retries, default -1 (infinity)
    db: 5, //optional db selection
    autoConnect: true, //will connect after creation
    doNotSetClientName: false, //will set connection name (you can see current connections by running CLIENT LIST on the redis server)
    doNotRunQuitOnEnd: false, //when you call `end()`, driver attempts to send `QUIT` command to redis before actual end
});
r.on('ready', function () {
    console.log('redis ready');
});   

r.on('connect', function () {
    console.log('redis connected');
});

//happens every time it connects

r.on('error', function (e) {
    console.log('redis error', e);
});




var saveUser =  async function saveUser(key, name, username, password) {
     r.rawCall(['hgetall', key], function(e, resp){
        console.log('HGETALL', e, resp);
        if (Object.entries(resp).length === 0 ) {
            r.rawCall(['hmset', key, 'name', name, 'username', username, 'password', password], function(e, resp){
                console.log("Data saved successfully");
                return resp;
            });
        } else {
            return "";
        }
    });
    
  }



module.exports = {
    saveUser : saveUser
}
