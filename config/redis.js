const redis = require('redis');
const redisClient = redis.createClient(6379);
const expire = 6 //1h
redisClient.on('error', function (err) {
    console.log('redis Error:' + err);
})

module.exports =  {
    add(key) {
        redisClient.set(key, true)
        redisClient.expire(key, expire)
    },
    updateExpire(key) {
        redisClient.expire(key, expire)
    },
    get(key,callback) {
        redisClient.get(key,(err,data)=>{
            callback(data)
        })
    },
    remove(key){
        redisClient.del(key)
    }

}