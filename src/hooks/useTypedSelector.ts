import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {AppRootState} from '../store';

const useTypedSelector: TypedUseSelectorHook<AppRootState> = useSelector;
export default useTypedSelector;