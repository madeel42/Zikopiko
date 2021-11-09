import Chart from "react-apexcharts";

const Metrics = () =>{

  const data = {
    options: {
      toolbar:{
        show: false
      },
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 90, 45, 50, 49, 60, 70, 91]
      }
    ]
  };

    return(
        <section id="sec_system">
        <div className="container">
          <div className="row">
            <div className="col-md-8 box_3">
              <div className="box_3_top">
                <h2>System Metrics</h2>
                <div className="group_btn">
                  <a className="btn btn_system active" href="#">Day</a>
                  <a className="btn btn_system" href="#">Week</a>
                  <a className="btn btn_system" href="#">Month</a>
                </div>
              </div>
              {/* chart 1 */}
              <div className="wrap_chart">
                <div className="chart_title">
                  <p>Average Platform Response Time</p>
                  <p>430ms</p>
                </div>
                <Chart 
                  options={data.options}
                  series={data.series}
                  type="area"
                  height="400"
                />
              </div>
              {/* chart 2 */}
              <div className="wrap_chart">
                <div className="chart_title">
                  <p>Polygon Transaction Processing Time</p>
                  <p>56 sec</p>
                </div>
                <Chart 
                  options={data.options}
                  series={data.series}
                  type="area"
                  height="400"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Metrics;