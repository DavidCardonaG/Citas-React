export const ObtenerDataState = () => {

    const citasStorage = localStorage.getItem('citas')
    if(citasStorage === null){
    return undefined
    }
    return JSON.parse(citasStorage)
}

export const GuardarDataState = state => {
    const citasState = JSON.stringify(state)
    localStorage.setItem('citas',citasState)
}
