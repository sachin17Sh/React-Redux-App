import { Component} from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch , connect} from 'react-redux';


//functional component with React Redux
const Counter = () => {
  const dispatch = useDispatch()
  const Counter = useSelector(state => state.counter)
  const show = useSelector(state=>state.showCounter)


  const incrementHandler = () =>{
    dispatch({type: 'increment'})
  }
  const decrementHandler = () =>{
    dispatch({type: 'decrement'})
  }

  const increaseHandler = ()=>{
    dispatch({type: 'increase', amount: 10})
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     { show && <div className={classes.value}>{Counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter




// class component with react Redux
// class Counter extends Component {

//   incrementHandler() {
//     this.props.increment()
//   }


//   decrementHandler() {
//     this.props.decrement()
//   }


//   toggleCounterHandler() {}


//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           {/* bind method will help to refer to the class */}
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button> 
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );

//   }
// }
// // this is the alternate of useSelector hook in functional component
// const mapStatetoProps= state =>{
//   return {
//     counter: state.counter
//   }
// }
// // this is the alternate of useDispatch hook in functional component
// const mapDispatchtoProps= dispatch =>{
//   return {
//     increment: () => dispatch({
//       type : 'increment'
//     }),
//     decrement: () => dispatch({
//       type : 'decrement'
//     })
    
//   }
// }

// export default connect(mapStatetoProps,mapDispatchtoProps)(Counter); 
