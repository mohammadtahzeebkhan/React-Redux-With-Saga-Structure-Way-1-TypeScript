// actions.ts

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Define UserRequestData type
export interface UserRequestData {
  url: string;
  method: string;
  handleError: (error: any) => void;
  handleResponse: (response: any) => void;
  // Add other properties if needed
}

// Define action types
export interface FetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
  data: UserRequestData;
}

interface FetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  userdata: User[]; // Replace 'User[]' with the appropriate type for userdata
}

interface FetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILURE;
  error: any; // Replace 'any' with the appropriate type for error
}

// Define the User type to represent your user data structure
export interface User {
  // Define the properties of your user data here
  user:any
}

// Create a union type of all possible action types
export type UserActionTypes =
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction;

// Define the action creators with type annotations

export const fetchUserRequest = (requestData: UserRequestData): FetchUsersRequestAction => {
  console.log("fetchUserRequest myurldata---->", requestData);
  return {
    type: FETCH_USERS_REQUEST,
    data: requestData,
  };
};

export const fetchUserSuccess = (userdata: any): FetchUsersSuccessAction => {
    console.log("userData",userdata)
  return {
    type: FETCH_USERS_SUCCESS,
    userdata,
  };
};

export const fetchUserFailure = (error: any): FetchUsersFailureAction => {
  return {
    type: FETCH_USERS_FAILURE,
    error,
  };
};
