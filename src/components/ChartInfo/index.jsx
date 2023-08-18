import React, { useEffect, useState } from "react";
import Select from "react-select";
import QuickChart from 'quickchart-js';
import { useForm, Controller } from "react-hook-form";
import { ContainerForm, Input, SubmitInput, ImageContainer, ChartImg, FiDownloadStyled, AddButton, DeleteButton, DownloadButton, InfoInputs, SelectItemStyles, ContainerFirstInputs, FirtTitle, SecondTitle, ContainerItems } from './styles'
import { FcPieChart, FcDoughnutChart, FcBarChart, FcLineChart } from "react-icons/fc";;

const chartTypes = [
  { value: "pie", label: "Pie", icon: <FcPieChart /> },
  { value: "doughnut", label: "Doughnut", icon: <FcDoughnutChart /> },
  { value: "bar", label: "Bar", icon: <FcBarChart /> },
  { value: "line", label: "Line", icon: <FcLineChart /> },
];

const ChartInfo = () => {
  const { register, handleSubmit, control } = useForm();
  const [isNotBarOrLine, setIsNotBarOrLine] = useState(true);
  const [data, setData] = useState({});
  const [chartUrl, setChartUrl] = useState('');
  const [inputPairs, setInputPairs] = useState([
    { label: '', data: '' },
    { label: '', data: '' },
    { label: '', data: '' },
  ]);

  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#ffffff',
      width: '14rem',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#d5edf1' : 'white',
      color: 'black'

    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: '#f1f1f1',
      paddingTop: '20px',
      paddingBottom: '20px',
      paddingLeft: '5px',
      paddingRight: '5px'
    }),
  };

  const downloadChartImage = () => {
    if (chartUrl) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', chartUrl, true);
      xhr.responseType = 'blob';
      xhr.onload = function () {
        const blob = xhr.response;
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'chart.png';
        link.click();
      };
      xhr.send();
    }
  };

  const deleteLastInputPair = () => {
    if (inputPairs.length > 3) {
      setInputPairs(prevInputPairs => prevInputPairs.slice(0, -1));
    }
  };

  const filterEmpty = (labels, data) => {
    const filteredLabels = labels.filter(label => label && label.trim() !== "");
    const filteredData = data.filter(value => value !== "");
    return [filteredLabels, filteredData];
  };

  const addInputPair = () => {
    if (inputPairs.length < 8) {
      setInputPairs(prevInputPairs => [...prevInputPairs, { label: '', data: '' }]);
    }
  };

  useEffect(() => {
    if (data.chartType) {
      setIsNotBarOrLine(data.chartType.value !== "bar" && data.chartType.value !== "line");
    }
  }, [data.chartType]);
  useEffect(() => {
    const updateChart = () => {
      const chart = new QuickChart();

      chart.setWidth(350);
      chart.setHeight(250);
      chart.setVersion('2');

      const labels = [];
      const dataValues = [];

      inputPairs.forEach((pair, index) => {
        labels.push(data[`label${index}`]);
        dataValues.push(data[`data${index}`] || 0);
      });

      const [filteredLabels, filteredData] = filterEmpty(labels, dataValues);

      chart.setConfig({
        type: data.chartType?.value || "bar",
        data: {
          datasets: [
            {
              data: filteredData,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(80, 45, 67)',
                'rgb(210, 120, 40)',
              ],
              fill: false,
              label: ''
            },
          ],
          labels: filteredLabels,
        },
        options: {
          title: {
            display: true,
            text: data.chartTitle + ` (${(data.dataUnit) || 'Un'})`
          },
          legend: {
            display: isNotBarOrLine,
            labels: {
              fontSize: 10,
              boxWidth: 10,
            },
          },
          tooltips: {
            bodyFontSize: 18,
          },
        },
      });

      if (data.chartType) {
        if (!!(data.chartType.value === "bar") || !!(data.chartType.value === "line")) {
          setIsNotBarOrLine(false);
        } else {
          setIsNotBarOrLine(true);
        }
      }

      if (data.chartType) {
        setChartUrl(chart.getUrl());
      }
    };

    updateChart();

  }, [data, inputPairs, isNotBarOrLine]);

  return (
    <ContainerForm>
      <FirtTitle>Welcome to Chart Generator!</FirtTitle>
      <SecondTitle>Choose your chart Type, fill out the informations and create your Chart!</SecondTitle>
      <ContainerItems>
        <form onSubmit={handleSubmit((formData) => setData(formData))} className="form-container">
          <label htmlFor="chartType">Choose chart type</label>
          <Controller
            name="chartType"
            control={control}
            defaultValue={chartTypes[0]}
            render={({ field }) => (
              <Select
                {...field}
                options={chartTypes}
                isSearchable={false}
                getOptionLabel={(option) => (
                  <SelectItemStyles>
                    {option.icon}
                    {option.label}
                  </SelectItemStyles>
                )}
                styles={customSelectStyles}
              />
            )}
          />
          <ContainerFirstInputs>

            <div className="input-pair">
              <label htmlFor="chartTitle" className="labels">Choose chart Title</label>
              <Input type="text" {...register("chartTitle")} placeholder="Chart Title" required className="input-no-margin" />
            </div>

            <div className="input-pair">
              <label htmlFor="dataUnit" className="labels">Choose data unit</label>
              <Input type="text" {...register("dataUnit")} placeholder="Data Unit" required className="input-no-margin" />
            </div>

          </ContainerFirstInputs>
          {inputPairs.map((pair, index) => (
            <InfoInputs key={index}>
              <Input
                type="text"
                {...register(`label${index}`)}
                placeholder={`Label ${index + 1}`}
                required
              />
              <Input
                type="number"
                {...register(`data${index}`)}
                placeholder={`Data ${index + 1}`}
                required
              />
            </InfoInputs>
          ))}
          {inputPairs.length < 7 && (
            <AddButton type="button" onClick={addInputPair}>
              + Add more info
            </AddButton>
          )}
          {inputPairs.length > 0 && (
            <DeleteButton type="button" onClick={deleteLastInputPair}>
              - Less info
            </DeleteButton>
          )}
          <SubmitInput type="submit" value="CREATE CHART" />
        </form>
        <ImageContainer>
          {chartUrl && <ChartImg src={chartUrl} alt="chart" />}
          {chartUrl && (
            <DownloadButton type="button" onClick={downloadChartImage}>
              <p>Download Chart</p>
              {<FiDownloadStyled />}
            </DownloadButton>
          )}
        </ImageContainer>

      </ContainerItems>

    </ContainerForm>
  );
};

export default ChartInfo;
