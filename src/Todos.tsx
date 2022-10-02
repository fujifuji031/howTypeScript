import { TodoType } from "./type/TodoType";

//OmitでTodoTypeの"id"以外を取り出す
export const Todo = (props: Omit<TodoType, "id">) => {
  //completedはundefindの可能性があるので初期値を設定しておくのが吉
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザー　：　${userId})`}</p>;
};
