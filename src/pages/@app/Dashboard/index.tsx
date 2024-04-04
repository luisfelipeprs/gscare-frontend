import { ApexOptions } from "apexcharts";
import { RouterIndicator } from "../../../components/RouterIndicator";
import { Card, CardInner, Container, Content, Icons, MainCards, ContentGrafico } from "./styled";
import ApexCharts from 'react-apexcharts';

import { CalendarX, CalendarCheck, CalendarBlank, ArrowURightUp, Money } from 'phosphor-react';

const calendarxIcons = <CalendarX size={24} />;
const calendarCheckIcons = <CalendarCheck size={24} />;
const calendarBlankIcons = <CalendarBlank size={24} />;
const arrowURightUpIcons = <ArrowURightUp size={24} />;
const moneyIcons = <Money size={24} />;

interface ReportScreenState {
    patientsScheduledData: {
        series: {
            name: string;
            data: number[];
        }[];
        options: ApexOptions;
    };
    otherDashboardData: {
        series: number[];
        options: ApexOptions;
    };

    distributedColumnsData: { //Codigo do grafico de colunas 
        series: {
            data: number[];
        }[];
        options: ApexOptions;
    };// fim 

    convenioColumnsData: { //Codigo do grafico Convenios 
        series: {
            data: number[];
        }[];
        options: ApexOptions;
    }; //fim

    procedimentosColumnsData: { //Codigo do grafico Top Procedimentos 
        series: {
            data: number[];
        }[];
        options: ApexOptions;
    }; //fim

}

function Dashboard() {
    const patientsScheduledData: ReportScreenState["patientsScheduledData"] = {
        series: [{
            name: 'Atendimentos',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }],
        options: {
            chart: {
                type: 'line'
            },
            xaxis: {
                categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set']
            }
        }
    };

    const otherDashboardData: ReportScreenState["otherDashboardData"] = {
        series: [44, 55, 13, 43, 22],
        options: {
            chart: {
                type: 'donut'
            },
            labels: ['A', 'B', 'C', 'D', 'E']
        }
    };

    //Cofig do grafico de coluna
    const distributedColumnsData: ReportScreenState["distributedColumnsData"] = {
        series: [{
            data: [300, 12, 33, 42, 42, 60]
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
            },
            colors: ['#A2C4C9', '#B7CE63', '#FF9999', '#FFE599', '#F4CCCC', '#99CCFF'],
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: ['Pacientes agendados', 'Pacientes confirmados', 'Pacientes desmarcados',
                    'Pacientes com retorno', 'Agendamento não faturados', 'Agendamento faturados'],
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    show: true
                }
            },
            tooltip: {
                enabled: true
            }
        }
    };

    // Config do grafico Convenios
    const convenioColumnsData: ReportScreenState["convenioColumnsData"] = {
        series: [{
            data: [4.7, 3.0],
        }],
        options: {
            chart: {
                type: "bar",
            },
            colors: ['#FF6666', '#FFFF99'],
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: [1, 2],
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    show: true
                }
            },
            tooltip: {
                enabled: true
            }
        }
    };

    // Config do Grafico Top Procedimentos  
    const procedimentosColumnsData: ReportScreenState["procedimentosColumnsData"] = {
        series: [{
            data: [1.0, 0.8, 0.9],
        }],
        options: {
            chart: {
                type: "bar",
            },
            colors: ['#CCCCCC', '#3399FF', '#66CC66'],
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: [1, 2, 3],
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    show: true
                }
            },
            tooltip: {
                enabled: true
            }
        }
    };

    return (
        <Container>
            <RouterIndicator
                descText="Painel do paciente"
                routerText="Controle"
            >
                <Content>
                    <div>
                        <h1>DASHBOARD</h1>
                        <h4>Indicadores de hoje</h4>

                        <MainCards>
                            <Card>
                                <CardInner>
                                    <h3>Pacientes agendados</h3>
                                    <Icons>{calendarBlankIcons}</Icons>
                                </CardInner>
                                <h1>300</h1>
                            </Card>

                            <Card>
                                <CardInner>
                                    <h3>Pacientes confirmados</h3>
                                    <Icons>{calendarCheckIcons}</Icons>
                                </CardInner>
                                <h1>12</h1>
                            </Card>

                            <Card>
                                <CardInner>
                                    <h3>Pacientes desmarcados</h3>
                                    <Icons>{calendarxIcons}</Icons>
                                </CardInner>
                                <h1>33</h1>
                            </Card>

                            <Card>
                                <CardInner>
                                    <h3>Pacientes com retorno</h3>
                                    <Icons>{arrowURightUpIcons}</Icons>
                                </CardInner>
                                <h1>42</h1>
                            </Card>

                            <Card>
                                <CardInner>
                                    <h3>Agendamento não faturados</h3>
                                    <Icons color="#FF9999">{moneyIcons}</Icons>
                                </CardInner>
                                <h1>42</h1>
                            </Card>

                            <Card>
                                <CardInner>
                                    <h3>Agendamento faturados</h3>
                                    <Icons color="#99CCFF">{moneyIcons}</Icons>
                                </CardInner>
                                <h1>60</h1>
                            </Card>
                        </MainCards>
                    </div>

                    <ContentGrafico>
                        <div>{/** Aqui jás um grafico de colunas */}
                            <h2>Top Convênios</h2>
                            <ApexCharts options={convenioColumnsData.options} series={convenioColumnsData.series} type="bar" height={350} />
                        </div>
                        <div>{/** Aqui jás um grafico de colunas */}
                            <h2>Top Procedimentos</h2>
                            <ApexCharts options={procedimentosColumnsData.options} series={procedimentosColumnsData.series} type="bar" height={350} />
                        </div>
                        <div>{/** Grafico de linas */}
                            <h2>Pacientes Agendados</h2>
                            <ApexCharts options={patientsScheduledData.options} series={patientsScheduledData.series} type="line" height={350} />
                        </div>
                        <div>{/**Grafico de Pizza */}
                            <h2>Dashboards</h2>
                            <ApexCharts options={otherDashboardData.options} series={otherDashboardData.series} type="donut" height={350} />
                        </div>
                        <div>{/** Aqui jás um grafico de colunas */}
                            <h2>Visão geral</h2>
                            <ApexCharts options={distributedColumnsData.options} series={distributedColumnsData.series} type="bar" height={350} />
                        </div>

                    </ContentGrafico>

                </Content>
            </RouterIndicator>
        </Container>
    );
}

export default Dashboard;