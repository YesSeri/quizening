import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1100px;
	background: #eafdfe;
	border-radius: 10px;
	border: 2px solid #0184a2;
	padding: 20px;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

	p {
		font-size: 1rem;
	}
`;

type ButtonWrapperProps = {
	correct: boolean;
	userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.4s ease;

  :hover {
    opacity: 0.75
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;

    width: 100%;
    height: 40px;
    margin: 5px 0px;
    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    background: ${({ correct, userClicked }) =>
			correct
				? 'linear-gradient(90deg, #55fea3, #58bb85)'
				: !correct && userClicked
				? 'linear-gradient(90deg, #fe5555, #c06767)'
				: 'linear-gradient(90deg, #55cbfe, #6daeb3)'};
  }
`;
