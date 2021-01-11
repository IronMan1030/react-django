import { useCreateContext } from "./create-context";

const initialState = {
  isOpen: false,
  drawerComponent: null,
  data: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_DRAWER":
      return {
        ...state,
        isOpen: true,
        drawerComponent: action.drawerComponent,
        data: action.data,
      };
    case "CLOSE_DRAWER":
      return {
        ...state,
        isOpen: false,
        drawerComponent: null,
        data: null,
      };
    default:
      return state;
  }
};

function DrawerContext() {
  const [useDrawerState, useDrawerDispatch, DrawerProvider] = useCreateContext(initialState, reducer);
  let result = { useDrawerState, useDrawerDispatch, DrawerProvider };
  return result;
}
export default DrawerContext();
