function Greeting() {
    return <p>{greeting("Will")}</p> // JSX code
    //JSX = JavaScript Syntax Extension
}

const jsxwert = <section></section>

function greeting(name) {
    return `Hello ${name}!`
}

export default Greeting
export {
    greeting
}