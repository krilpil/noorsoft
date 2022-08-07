import styled from 'styled-components';

export const MessageBlock = styled('div')<{ writtenBy: 'client' | 'operator' }>`
  display: flex;
  gap: 20px;
  background-color: #3596fe;
  padding: 10px 25px;
  width: max-content;
  max-width: 300px;
  align-self: ${(props) => (props.writtenBy === 'client' ? 'start' : 'end')};
  border-radius: 15px;
`;
