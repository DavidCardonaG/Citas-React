import { createStore } from "redux"; 
import Reducer from '../Reducers'
import {ObtenerDataState,GuardarDataState} from '../LocalStorage'

const storageState = ObtenerDataState()

 const store = createStore(
    Reducer,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
store.subscribe(() =>{
    GuardarDataState({
        citas: store.getState().citas
    })

})

export default store;