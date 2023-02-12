export const increment = (data) => ({
    type: "inc",
    payload: data
  });
  
  export const decrement = (data) => {
    return {
      type: "dec",
      payload: data
    };
  };
  