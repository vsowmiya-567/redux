import {configureStore} from '@reduxjs/toolkit'
import reducer from './MainSlice'

export const store = configureStore({

    reducer:{
        datas : reducer

    }
})
