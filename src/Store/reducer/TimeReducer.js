const initialState = {
  // startTime: [],
  // stopTime: [],
  time: [
    {
      startTime: "",
      stopTime: "",
    },
  ],
  result: false,
};

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "START_TIME":
//       const updateStart = [...state.startTime, action.payload];
//       console.log("updateStart", updateStart);
//       console.log("start", ...state.startTime);
//       return {
//         ...state,
//         startTime: updateStart,
//         result: true,
//       };
//     case "END_TIME":
//       const updateStop = [...state.stopTime, action.payload];
//       return {
//         ...state,
//         stopTime: updateStop,
//         result: true,
//       };

//     default:
//       return state;
//   }
// }

function reducer(state = initialState, action) {
  switch (action.type) {
    case "START_TIME":
      const updateStart = [state, action.payload];
      // console.log("updateStart", updateStart);
      console.log("action", action.payload);
      return {
        ...state,
        time: state.time.map((start) => {
          console.log("start", start);
          console.log("starttime", start.startTime);
          //const startdata = start.startTime.push(action.payload);
          start.startTime = action.payload;
          console.log("starttime", start.startTime);
        }),

        result: true,
      };
    case "END_TIME":
      const updateStop = [state, action.payload];
      // console.log("updatestop", updateStop);

      const length = state.time.length - 1;
      console.log("length", length);
      return {
        ...state,
        time: (state.time[length]["stopTime"] = action.payload),
        // time: [{ ...state.time }],

        result: true,
      };

    default:
      return state;
  }
}
export default reducer;
