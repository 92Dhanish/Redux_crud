
export const StudentsAdd = (data) => {
  return {
    type: 'ADD_STUDENT',
    payload: data,
  };
};
export const singleuser = (data, index) => {
  // console.log(id , 'data');

  return {
    type: 'SINGLE_STUDENT',
    payload: { data, index },
  };
};

export const updateuser = (data, index) => {
  return {
    type: 'UPDATE',
    payload: { data, index },
  };
};

export const deleteuser = (id) => {
  return {
    type: 'DELETE',
    payload: id,
  };
};
