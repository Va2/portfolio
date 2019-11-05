import React, { Component } from 'react';
import Typed from "react-typed";
import $ from "jquery";

import "./Statistics.css";

const itemStyle = {
    visibility: "visible"
};

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

  $("#number1").jQuerySimpleCounter({ end: 12, duration: 3000 });
  $("#number2").jQuerySimpleCounter({ end: 2, duration: 3000 });
  $("#number3").jQuerySimpleCounter({ end: 4, duration: 2000 });
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
            <div
              className="item wow fadeInUpBig animated animated"
              data-number="12"
              style={itemStyle}
            >
              <i className="fas fa-code"></i>
              <p id="number1" className="number">
                12
              </p>
              <span></span>
              <div class="typer_wrapper">
                <p>
                  Known{" "}
                  <Typed
                    strings={["Languages", "Frameworks"]}
                    typeSpeed={65}
                    backSpeed={55}
                    loop
                  />
                </p>
              </div>
            </div>
            <div
              className="item wow fadeInUpBig animated animated"
              data-number="2"
              style={itemStyle}
            >
              <i class="fas fa-laptop-code"></i>
              <p id="number2" className="number">
                2
              </p>
              <span></span>
              <p>Known Web Technologies</p>
            </div>
            <div
              className="item wow fadeInUpBig animated animated"
              data-number="4"
              style={itemStyle}
            >
              <i class="fas fa-tasks"></i>
              <p id="number3" className="number">
                4
              </p>
              <span></span>
              <p>Projects done</p>
            </div>
            <div
              className="item wow fadeInUpBig animated animated"
              data-number="2"
              style={itemStyle}
            >
              <i class="fas fa-cogs"></i>
              <p id="number4" className="number">
                2
              </p>
              <span></span>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;