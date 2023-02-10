export default function cities(state = [], action) {
    switch (action.type) {
        case "ADD_CITY":
            return [...state, action.payload];
        case "REMOVE_CITY":
            return [...state.filter((city) => {
                return city.name !== action.payload
            })]
        default:
            return state;
    }
}