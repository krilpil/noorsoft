import {useSelector as useReduxSelector, TypedUseSelectorHook,} from 'react-redux'
import rootReducer from '../redux/reducers'

const useSelector: TypedUseSelectorHook<ReturnType<typeof rootReducer>> = useReduxSelector
export default useSelector