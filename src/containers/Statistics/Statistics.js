import React, { Component } from 'react';
import Typed from "react-typed";
import $ from "jquery";

import "./Statistics.css";

const itemStyle = {
    visibility: "visible"
};

// function calculate_years_of_xp(start_date) {
//   var diff_ms = Date.now() - start_date.getTime();
//   var age_dt = new Date(diff_ms);

//   return Math.abs(age_dt.getUTCFullYear() - 1970);
// }
// const years_of_xp = calculate_years_of_xp(new Date(2017, 9, 20));

class Statistics extends Component {
  componentDidMount() {
    
    $.fn.jQuerySimpleCounter = function(options) {
      var settings = $.extend(
        {
          start: 0,
          end: 100,
          easing: "swing",
          duration: 400,
          complete: ""
        },
        options
      );

      var thisElement = $(this);

      $({ count: settings.start }).animate(
        { count: settings.end },
        {
          duration: settings.duration,
          easing: settings.easing,
          step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
          },
          complete: settings.complete
        }
      );
    };

    $("#number1").jQuerySimpleCounter({ end: 6, duration: 3000 });
    $("#number2").jQuerySimpleCounter({ end: 2, duration: 3000 });
    $("#number3").jQuerySimpleCounter({ end: 3, duration: 2000 });
    $("#number4").jQuerySimpleCounter({ end: 2, duration: 2500 });

    /* AUTHOR LINK */
    $(".about-me-img").hover(
      function() {
        $(".authorWindowWrapper")
          .stop()
          .fadeIn("fast")
          .find("p")
          .addClass("trans");
      },
      function() {
        $(".authorWindowWrapper")
          .stop()
          .fadeOut("fast")
          .find("p")
          .removeClass("trans");
      }
    );
  }

  render() {
    return (
      <div id="projectFacts" className="sectionClass">
        <div className="fullWidth eight columns">
          <div className="projectFactsWrap ">
            <div className="item wow" data-number="6" style={itemStyle}>
              <i className="fas fa-code"></i>
              <p id="number1" className="number">
                6
              </p>
              <span></span>
              <div className="typer_wrapper">
                <p>
                  Known Front-end
                  <br />{" "}
                  <Typed
                    strings={["Languages", "Frameworks", "Libraries"]}
                    typeSpeed={85}
                    backSpeed={65}
                    loop
                  />
                </p>
              </div>
            </div>
            <div className="item wow" data-number="2" style={itemStyle}>
              <i className="fas fa-laptop-code"></i>
              <p id="number2" className="number">
                2
              </p>
              <span></span>
              <div className="typer_wrapper">
                <p>
                  Known Back-end
                  <br />{" "}
                  <Typed
                    strings={["Languages", "CMS"]}
                    typeSpeed={85}
                    backSpeed={65}
                    loop
                  />
                </p>
              </div>
            </div>
            {/* <div className="item wow" data-number="2" style={itemStyle}>
              <i className="fas fa-laptop-code"></i>
              <p id="number2" className="number">
                2
              </p>
              <span></span>
              <p>
                Known Web
                <br />
                Technologies
              </p>
            </div> */}
            <div className="item wow" data-number="3" style={itemStyle}>
              <i className="fas fa-tasks"></i>
              <p id="number3" className="number">
                3
              </p>
              <span></span>
              <p>
                Projects
                <br />
                done
              </p>
            </div>
            <div className="item wow" data-number="2" style={itemStyle}>
              <i className="fas fa-cogs"></i>
              <p id="number4" className="number">
                2
              </p>
              <span></span>
              <p>
                Years
                <br />
                Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;