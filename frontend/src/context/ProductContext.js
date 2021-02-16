import { useCreateContext } from "./create-context";

const initialState = {
  optionTags: null,
  optionType: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "VARIANT_OPTION":
      return {
        ...state,
        optionTags: action.optionTags,
        optionType: action.optionType,
      };
    case "CLOSE_PRODUCT":
      return {
        ...state,
        optionTags: null,
        optionType: null,
      };
    default:
      return state;
  }
};

function ProductContext() {
  const [useProductState, useProductDispatch, ProductProvider] = useCreateContext(initialState, reducer);
  let result = { useProductState, useProductDispatch, ProductProvider };
  return result;
}
export default ProductContext();
