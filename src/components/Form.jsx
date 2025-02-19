import Table from "./Table"

function Form() {

    const student = {
        name : "Hello",
        age : 21
    }

    const username = "Hello"

  return (
    <div>
        <h1 className="text-center">This is Form Page</h1>
        <hr />
        <Table student={student} username={username}/>
    </div>
  )
}

export default Form
