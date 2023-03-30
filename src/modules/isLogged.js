const isLogged = () => {
  return (localStorage.getItem('token'));
}

export { isLogged };