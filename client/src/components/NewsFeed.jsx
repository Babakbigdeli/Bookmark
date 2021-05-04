import React from "react";
import { Feed, Icon } from "semantic-ui-react";

export default class NewsFeed extends React.Component {
  state = {
    loading: true,
    news: null,
  };

  async componentDidMount() {
    const url =
      "https://content.guardianapis.com/search?q=books&api-key=ea5c2603-5999-43b3-8ddf-e3db33f0592d";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({
      news: data.response.results.splice(5, 10),
      loading: false,
    });
  }

  render() {
    return (
      <Feed.Event>
        <Feed>
          <Feed.Label>
            <Icon name="newspaper" />
            <bold>NEWS FEED</bold>
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
