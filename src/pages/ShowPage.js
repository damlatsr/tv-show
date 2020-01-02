import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

class ShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null
    };
  }

  componentDidMount() {
    const self = this;
    fetch(`https://api.tvmaze.com/shows/${this.props.match.params.id}`)
      .then(resp => resp.json())
      .then(function(data) {
        self.setState({
          show: data
        });
      });
  }

  render() {
    return this.state.show
      ? React.createElement(
          "div",
          {
            className: "show-detail"
          },
          React.createElement(Navbar, {
            title: this.state.show.name
          }),
          React.createElement(
            Container,
            {
              className: "container"
            },
            React.createElement(
              "h1",
              {
                className: "my-4"
              },
              this.state.show.name,
              React.createElement(
                "sub",
                null,
                React.createElement(
                  "span",
                  {
                    className: "text-muted"
                  },
                  " ",
                  this.state.show.status
                )
              )
            ),
            React.createElement(
              Row,
              null,
              this.state.show.image
                ? React.createElement(
                    Col,
                    {
                      md: 8
                    },
                    React.createElement(Card.Img, {
                      className: "img-fluid",
                      src: this.state.show.image.original,
                      alt: this.state.show.name
                    })
                  )
                : null,
              React.createElement(
                Col,
                {
                  md: 4
                },
                this.state.show.genres
                  ? this.state.show.genres.map((genre, index) => {
                      return React.createElement(
                        "span",
                        {
                          key: index,
                          className: "badge badge-primary m-1"
                        },
                        genre
                      );
                    })
                  : null,
                React.createElement(
                  Card.Title,
                  {
                    className: "my-3"
                  },
                  "Description"
                ),
                React.createElement(Card.Text, {
                  dangerouslySetInnerHTML: {
                    __html: this.state.show.summary
                  }
                }),
                React.createElement(
                  Card.Title,
                  {
                    className: "my-3"
                  },
                  "Schedule"
                ),
                React.createElement(
                  ListGroup,
                  {
                    variant: "flush"
                  },
                  React.createElement(
                    ListGroup.Item,
                    {
                      disabled: true
                    },
                    this.state.show.schedule.time
                      ? this.state.show.schedule.time
                      : React.createElement(
                          "span",
                          null,
                          "time information not found..."
                        )
                  ),
                  React.createElement(
                    ListGroup.Item,
                    {
                      disabled: true
                    },
                    this.state.show.schedule.days != ""
                      ? this.state.show.schedule.days
                      : React.createElement(
                          "span",
                          null,
                          "day information not found..."
                        )
                  ),
                  React.createElement(
                    ListGroup.Item,
                    {
                      disabled: true
                    },
                    this.state.show.rating.average
                      ? this.state.show.rating.average
                      : React.createElement(
                          "span",
                          null,
                          "average information not found..."
                        )
                  )
                )
              )
            )
          )
        )
      : React.createElement(Loading, null);
  }
}

export default ShowPage;
