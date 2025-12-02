export function LoginForm() {
  const onSubmit = ({ target, preventDefault }) => {
    // console.log(target.elements.login)
    // console.log(target.elements.password)
    const formData = new FormData(target);
    const data = Object.fromEntries(formData);

    /*
      {
        login: '777@hello.ru',
        password: '666'
      }
    */
    preventDefault();
  };
  return (
    <form>
      <div>
        <label htmlFor="login">Login</label>
        <input id="login" type="text" name="login" />
      </div>
      <div>
        <label htmlFor="password">Login</label>
        <input id="password" type="text" name="password" />
      </div>
    </form>
  );
}
