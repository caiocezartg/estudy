import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

export const LessonsChallengesSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const LessonsContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  position: relative;
  flex: 0 0 calc(70% - 15px);
  margin-right: 15px;
  margin-bottom: 30px;
  overflow: hidden;
  height: 100%;

  h2 {
    color: #4ecb71;
    font-weight: 600;
    font-size: 42px;
    text-align: center;
    margin: 20px 0 10px;
  }

  h4 {
    color: #00914b;
    font-weight: 500;
    font-size: 22px;
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const LessonList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-height: 100vh;
`;

export const ChallengesContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  position: relative;
  flex: 0 0 calc(30% - 15px);
  margin-left: 15px;
  margin-bottom: 30px;

  h2 {
    color: #4ecb71;
    font-weight: 600;
    font-size: 42px;
    text-align: center;
    margin: 20px 0 10px;
  }

  h4 {
    color: #00914b;
    font-weight: 500;
    font-size: 22px;
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const ChallengesList = styled.ul`
  display: flex;
  max-height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
