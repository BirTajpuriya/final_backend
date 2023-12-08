import { server } from '../store';
import axios from 'axios';

export const getAllCourses =
  (category = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'allCoursesRequest' });

      const { data } = await axios.get(
        `${server}/courses?keyword=${keyword}&category=${category}`
      );

      dispatch({ type: 'allCoursesSuccess', payload: data.courses });
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        dispatch({
          type: 'allCoursesFail',
          payload: error.response.data.message,
        });
      } else {
        dispatch({
          type: 'allCoursesFail',
          payload: 'An unknown error occurred while fetching courses.',
        });
      }
    }
  };

export const getCourseLectures = id => async dispatch => {
  try {
    dispatch({ type: 'getCourseRequest' });

    const { data } = await axios.get(`${server}/course/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: 'getCourseSuccess', payload: data.lectures });
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      dispatch({
        type: 'getCourseFail',
        payload: error.response.data.message,
      });
    } else {
      dispatch({
        type: 'getCourseFail',
        payload: 'An unknown error occurred while fetching course lectures.',
      });
    }
  }
};
