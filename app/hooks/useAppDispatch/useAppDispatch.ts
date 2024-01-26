import { AppDispatch } from 'app/store/store.types'
import { useDispatch } from 'react-redux'


const useAppDispatch: () => AppDispatch = useDispatch

export default useAppDispatch
