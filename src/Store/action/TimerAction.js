export const starttimer = (timedata) => {
  return {
    type: "START_TIME",
    payload: timedata,
  };
};

export const endtimer = (timedata) => {
  return {
    type: "END_TIME",
    payload: timedata,
  };
};
