import React from "react";
import { Container, ContainerItems, Img } from './styles'
import chart1 from '../../assets/imgs/chart1.png'
import chart2 from '../../assets/imgs/chart2.png'
import chart3 from '../../assets/imgs/chart3.png'
import chart4 from '../../assets/imgs/chart4.png'
import chart5 from '../../assets/imgs/chart5.png'
import chart6 from '../../assets/imgs/chart6.png'

const ChartExamples = () => {

  return (
    <Container>
      <h1>Chart Examples:</h1>
      <ContainerItems>
        <Img src={chart1} />
        <Img src={chart2} />
        <Img src={chart3} />
        <Img src={chart4} />
        <Img src={chart5} />
        <Img src={chart6} />
      </ContainerItems>

    </Container>
  );
};

export default ChartExamples;
