import './App.css'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  min-width: 1200px;
  background-color: white;
`

const Section = styled.section`
  width: 1040px;
  height: 552px;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  position: relative;
`

const LeftImgBox = styled.div`
  width: 400px;
  height: 338px;
  padding-top: 280px;
  background-image: url('img/triple2x.png');
  background-size: 400px 338px;
  background-repeat: no-repeat;
  position: absolute;
  top: 150px;
  font-size: 15px;
  color: rgba(58, 58, 58, 0.7);
  text-align: center;
`

const CustomerStatisticsBox = styled.div`
  margin-left: 623px;
  padding-top: 150px;
`

const CustomerStatus = styled.div`
  width: 417px;
  height: 36px;
  color: rgb(58, 58, 58);
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  line-height: 100%;
`

const AwardsBox = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
`

const AwardItem = styled.div`
  background-image: url(${(props) => props.imgURL});
  background-size: 400px 338px;
  display: inline-block;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
`

function App() {
  return (
    <Container>
      <Section>
        <LeftImgBox>2021년 12월 기준</LeftImgBox>
        <CustomerStatisticsBox>
          <CustomerStatus>
            <strong>
              <span>700</span>만 명
            </strong>
            의 여행자
          </CustomerStatus>
          <CustomerStatus>
            <strong>
              <span>100</span>만 개
            </strong>
            의 여행 리뷰
          </CustomerStatus>
          <CustomerStatus>
            <strong>
              <span>470</span>만 개
            </strong>
            의 여행 일정
          </CustomerStatus>
        </CustomerStatisticsBox>
        <AwardsBox>
          <AwardItem imgURL="/img/play-store2x.png">
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </AwardItem>
          <AwardItem imgURL="/img/badge-apple4x.png">
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </AwardItem>
        </AwardsBox>
      </Section>
    </Container>
  )
}

export default App
