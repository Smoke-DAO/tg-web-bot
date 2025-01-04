import styled from '@emotion/styled';
import { Title as TextTitle } from './Text';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const SectionWrapper = styled.section`
  display: flex;
  margin-top: 24px;
  width: 100%;
  flex-direction: column;
  justify-content: start;
`;

const Content = styled.div`
  display: flex;
  margin-top: 8px;
  width: 100%;
  align-items: center;
  gap: 22px;
  justify-content: space-between;
`;

export const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <SectionWrapper>
            <TextTitle>{title}</TextTitle>
            <Content>{children}</Content>
        </SectionWrapper>
    );
};