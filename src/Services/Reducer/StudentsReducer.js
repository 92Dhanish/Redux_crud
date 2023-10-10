
const initiale = {
    Students: [],
    student: null,
    isIndex: null
}

const StudentsReducer = (state = initiale, action) => {


    switch (action.type) {
        case 'ADD_STUDENT':
            return (
                {

                    ...state,
                    Students: [...state.Students, action.payload]
                }

            )
        case 'SINGLE_STUDENT':
            return {
                ...state,
                student: action.payload.data,
                isIndex: action.payload.index
            }


        case 'UPDATE':

            let stdnt = state.Students;

            stdnt[action.payload.index] = action.payload.data; 

            return{
                ...state,
                Students: stdnt,
                isIndex: null,
                student: null
            }


        case 'DELETE':

            let delst = state.Students;

            let delete_s = delst.filter((del)=>{
                return(
                    del.id != action.payload
                )
            })

            return{
                ...state,
                Students: delete_s

            }
        default:
            return state

    }


}

export default StudentsReducer
