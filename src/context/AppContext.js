
import createDataContext from './createDataContext';
import StarWarsApi from '../api/StarWarsApi';

const AppReducer = (state, action) => {
    switch (action.type){
        case 'update_api_error':
            return {
                ...state,
                apiError: action.payload.apiError
            };
        case 'update_ship_data':
            return {
                ...state,
                shipData: action.payload
            };
        case 'update_ship_manufacturer':
            return {
                ...state,
                shipManufacturer: action.payload
            };
        case 'update_people_data':
            return {
                ...state,
                peopleData: action.payload
            };
        case 'update_planet_data':
            return {
                ...state,
                planetData: action.payload
            };
        case 'update_loading':
            return {
                ...state,
                loading: action.payload
            };
        case 'update_selected_manufacturer':
            return {
                ...state,
                selectedManufacturer: action.payload
            };
        case 'update_unfiltered_ship_data':
            return {
                ...state,
                unfilteredShipData: action.payload
            };
        default:
            return state;
    }
}

const updateApiError = dispatch => {
    return async (errMessage) => {
        dispatch({type:'update_api_error', payload: { apiError: errMessage } });
    }
}

const updateLoading = dispatch => {
    return async (loading) => {
        dispatch({type:'update_loading', payload: loading });
    }
}

const updateShipData = dispatch => {
    return async () => {
        let newShipData = [];
        let shipManufacturer = [];
        try {
            // const response = await StarWarsApi.get('/starships');
            // console.log(response.data.results);
            // dispatch({type:'update_ship_data', payload: response.data.results });
            for (let index = 1; index < 5; index++) {
                // console.log(index);
                const response = await StarWarsApi.get(`/starships/?page=${index}`);
                // newShipData.push(response.data.results);
                // console.log(response.data.results);
                for(d=0; d < response.data.results.length; d++){
                    // console.log(response.data.results[d].name);
                    newShipData.push(response.data.results[d]);
                    shipManufacturer.push(response.data.results[d].manufacturer);
                }
            }
            // dispatch({type:'update_ship_data', payload: newShipData.flat() });
            dispatch({type:'update_unfiltered_ship_data', payload: newShipData });
            dispatch({type:'update_ship_data', payload: newShipData });
            // sort our array of manufacturers for the drop down selector
            // console.log(shipManufacturer.sort());
            // TODO: remove duplicates
            dispatch({type:'update_ship_manufacturer', payload: shipManufacturer.sort() });
        } catch (err) {
            console.log(err);
            dispatch({type:'update_api_error', payload: { apiError: err.message } });
        }
    }
}

const updateSelectedManufacturer = dispatch => {
    return async (selectedManufacturer) => {
        dispatch({type:'update_selected_manufacturer', payload: selectedManufacturer });
    }
}

const filterByManufacturer = dispatch => {
    return async (selectedManufacturer, shipData) => {
        if(selectedManufacturer && shipData){
            // save data so we don't hit api too much
            // dispatch({type:'update_unfiltered_ship_data', payload: shipData });  // not handling this correctly
            const filteredResults = shipData.filter((item) => {
                return item.manufacturer.includes(selectedManufacturer);
            });
            dispatch({type:'update_ship_data', payload: filteredResults });
        }
    }
}

const resetShipData = dispatch => {
    return async (unfilteredShipData) => {
        if(unfilteredShipData){
            dispatch({type:'update_ship_data', payload: unfilteredShipData });
            dispatch({type:'update_selected_manufacturer', payload: '' });
        }
    }
}

export const { Context, Provider } = createDataContext(
    AppReducer,
    { 
        updateApiError, updateLoading, updateShipData, updateSelectedManufacturer, filterByManufacturer, resetShipData
    },
    { apiError:'', loading: false, shipData: [], peopleData: [], planetData: [], shipManufacturer: [], selectedManufacturer: '', unfilteredShipData: [] }
);