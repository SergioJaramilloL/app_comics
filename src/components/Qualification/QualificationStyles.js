import styled from 'styled-components';


export const Content = styled.form`
  width: 250px;
  margin: 0 auto;
  height: 50px;
`;

export const ContentStars = styled.p`
  direction: rtl;
  unicode-bidi: bidi-override;
  text-align: center;
`;

export const Input = styled.input`
  display: none;

  &:checked ~ label {
  color: orange;
}
`;

export const Star = styled.label`
  color: grey;
  font-size: 20px;

  &:hover {
    color: orange;
  }

  &:hover ~ label {
  color: orange;
  }
`;

