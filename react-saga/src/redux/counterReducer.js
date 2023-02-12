const counterReducer = (no = 0, action) => {
    switch (action.type) {
      case "inc":
        return no + action.payload;
      case "dec":
        return no - action.payload;
      default:
        return no;
    }
  };
  
  export default counterReducer;
  