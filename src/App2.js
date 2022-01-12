// import Button from './Button'
// import styles from "./App.module.css"
//
// function App() {
//   return (
//       <div>
//         <h1 className={styles.title}>Welcome Back</h1>
//         <Button text='continue' />
//       </div>
//   );
// }

// function App() {
//   return (
//       <div>
//         <h1 className={styles.title}>Welcome Back</h1>
//         <Button text='continue' />
//       </div>
//   );
// }



// import {useEffect, useState} from "react";
//
// function App() {
//     const [counter, setCounter] = useState(0)
//     const [keyword, setKeyword] = useState('')
//
//     const onClick = () => { setCounter((prev) => prev + 1) }
//     const onChange = (event) => { setKeyword(event.target.value) }
//     // console.log('render')
//
//     const iRunOnlyOnce = () =>{
//         console.log('i run only once')
//     }
//     // console.log('i run only once')
//
//   // useEffect(iRunOnlyOnce, [])
//   //  아래처럼 함수를 직접 넣어도 됨
//     useEffect(() => { console.log('i run only once') }, []);
//   //   useEffect(onClick, [])
//     useEffect( () => {
//         console.log('i run where keyword change')
//     }, [keyword])
//     useEffect( () => {
//         console.log('i run where count change')
//     }, [counter])
//
//   // console.log('Search for', keyword)
//   return (
//       <div>
//           <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
//         <h1>{counter}</h1>
//           <button onClick={onClick}>counter</button>
//       </div>
//   );
// }
import {useEffect, useState} from "react";

function Hello(){
    // useEffect( () => {
    //     console.log('i am here')
    // },[]);

    // function byFn(){
    //     console.log('bye')
    // }
    //
    // function hiFn(){
    //     console.log('hi')
    //     return byFn;
    // }

    useEffect( function(){
        console.log('hi')
        return function (){
            return console.log('bye')
        }
    },[])

    // useEffect( () =>{
    //     console.log('hi')
    //     return () => {
    //         console.log('bye')
    //     }
    // }, [])
    return <h1>Hello</h1>
}

function App2(){
    const [showing, setShowing] = useState()
    const onClick = () =>{
        setShowing(prev => !prev)
    }

    return( <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick}>{showing ? "hide" : 'show'}</button>
    </div>);
}

export default App2;
