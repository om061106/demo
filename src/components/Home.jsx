function Home(props){
    const {getValue} = props
    const username = "Hello"

    getValue(username)

    return (
        <>
            <h1>Home Page</h1>
        </>
    )
}

export default Home;