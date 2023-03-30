export default defineEventHandler((event) => {

    const { name } = getQuery(event)
    return {
        message: 'Hello World and ' + name,
    }

})