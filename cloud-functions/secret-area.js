exports.handler = function(event, context, callback) {
    const secretContent = `
    <h3>Welcome to the Secret Area!</h3
    ,pHere we can tell you the sky is <strong>blue</strong>, and the grass is <stronggreen</strong>.
    `

    let body

    if (event.body) {
        body = JSON.parse(event.body)
    } else {
        body = {}
    }

    if (body.password == "javascript") {
        callback(null, {
            statusCode: 200,
            body: secretContent
        })
    } else {
        callback(null, {
            statusCode: 401
        })
    }
}
