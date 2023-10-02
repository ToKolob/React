export function Status() {
  const status = true;
  return (
  <h2 
  style={{
    color: status ? 'green' : 'red',
    backgroundColor: status ? 'greenyellow' : 'rebeccapurple',
  }}
  
  >Current status: {status ? 'online' : 'offline'} </h2>)
}
