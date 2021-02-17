export const FETCH_DATA = "FETCH_DATA";
export const SEARCH = "SEARCH";
export const FILTER = "FILTER";

export const fetchData = () => {
  return async (dispatch) => {
    const response = await fetch(
      "http://localhost/movie-app/backend/api/get_data.php"
    );

    if (response.ok) {
      const responseJson = await response.json();
      dispatch({
        type: FETCH_DATA,
        data: responseJson,
      });
    }
  };
};

export const searchData = (keyword) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost/movie-app/backend/api/search.php?keyword=${keyword}`
    );

    if (response.ok) {
      const responseJson = await response.json();
      dispatch({
        type: SEARCH,
        data: responseJson,
      });
    }
  };
};

export const filterMovies = (category) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost/movie-app/backend/api/get_by_category.php?category=${category}`
    );

    if (response.ok) {
      const responseJson = await response.json();
      dispatch({
        type: FILTER,
        data: responseJson,
      });
    }
  };
};
