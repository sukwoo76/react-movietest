import {useState} from "react";


function App(){
    const [toDo, settoDo] = useState('')
    const [toDos, settoDos] = useState([])
    const onChange = (event) => settoDo(event.target.value)
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(toDos)

        if( toDo == ""){
            return;
        }
        settoDos( ( currentArray ) => [toDo, ...currentArray]);
        settoDo('')
    }

    // console.log(toDos)
    // settoDo('')
    return (<div>
        <h1>My To dos({toDos.length})</h1>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={toDo} type='text' placeholder='wirte youer..' />
            <button>Add to Do</button>
        </form>
        <hr/>
        <ul>
            {toDos.map( (item,idx) => <li key={idx}>{item}</li>)}
        </ul>
    </div>)
}

export default App;