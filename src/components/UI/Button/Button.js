import styled from "styled-components";


const Button = styled.button`
  width: 150px;
  padding: 10px 5px;
  background: #b7102d;
  color: #ffffff;
  font-weight: 600;
  border-style: none;
  border-radius: 8px;
&:focus {
    outline: none;
  }

  &:hover,
  &:active {
  background: tomato;
border: 1px solid orange;
}

`;
// const Button = (props) => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
//};

export default Button;
