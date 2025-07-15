export const User = ({ firstName, lastName, age }) => {
  return (
    <div>
      <b>Имя</b>: {firstName}
      <br />
      <b>Фамилия</b>: {lastName}
      <br />
      <b>Возраст</b>: {age}
    </div>
  );
};
