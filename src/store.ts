import { configureStore } from "@reduxjs/toolkit"
import { commonDataSlice, COMMON_DATA_REDUX_KEY_NAME } from "@step/frontend-auxiliaries"

const store = configureStore({
    devTools: {
        name: "@step/mia_template_project_id_placeholder"
    },
    reducer: {
        [COMMON_DATA_REDUX_KEY_NAME]: commonDataSlice.reducer as never
    }
})

export default store
