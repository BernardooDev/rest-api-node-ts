import {server} from "./server/server"

const PORT = process.env.PORT

server.listen(PORT || 3000, () => {
    console.log(`server is running on port ${PORT}`)
})