export const ApiConstants = {
  TODO: {
    ADD: (userId: number) => {
      return "/todo/" + userId;
    },
    FIND_NOT_COMPLETED: (userId: number) => {
      return "/todo/findAllTodoByUserNotCompleted/" + userId;
    },
    FIND_COMPLETED: (userId: number) => {
      return "/todo/findAllTodoByUserCompleted/" + userId;
    },
    MARK_COMPLETE: (todoId: number) => {
      return "/todo/" + todoId;
    },
    DELETE: (todoId: number) => {
      return "/todo/" + todoId;
    },
  },
  USER: {
    SIGN_UP: "/user/signUp",
    FIND_ALL: "/user",
    DELETE: (userId: number) => {
      return "/user/" + userId;
    },
  },
  LOGIN: "/auth/login",
};
