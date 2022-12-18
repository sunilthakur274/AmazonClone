function RegisterPage(props) {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
      />
    </>
  );
}
export default RegisterPage;
