import React from "react";
import { Feed, Icon } from "semantic-ui-react";
import moment from "moment";

export default class NewsFeed extends React.Component {
  state = {
    loading: true,
    news: null,
  };

  async componentDidMount() {
    let from = moment().subtract(7, "days").format("YYYY-MM-DD");
    let to = moment().format("YYYY-MM-DD");
    console.log(from);
    const url = `https://content.guardianapis.com/books?from-date=${from}&to-date=${to}&api-key=ea5c2603-5999-43b3-8ddf-e3db33f0592d`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({
      news: data.response.results.splice(0, 10),
      loading: false,
    });
  }

  render() {
    return (
      <Feed.Event>
        <Feed>
          <Feed.Label>
            <h1>
              <Icon name="newspaper" />
              Latest news in the world of books
            </h1>
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              {this.state.loading || !this.state.news ? (
                <div>loading...</div>
              ) : (
                this.state.news.map((newsArticle) => {
                  return (
                    <div>
                      <div>{newsArticle.webTitle}</div>
                      <a href={newsArticle.webUrl} target="blank">
                        link to article
                      </a>
                    </div>
                  );
                })
              )}
            </Feed.Summary>
          </Feed.Content>
        </Feed>
      </Feed.Event>
    );
  }
}
