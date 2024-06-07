import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('./posts', false, /\.md$/))
    .sort()
    .reverse()

console.log(markdownFiles)
class Blog extends Component {
  state = {
    posts: [],
  }

  async componentDidMount() {
    const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
      .catch((err) => console.error(err));

    this.setState((state) => ({ ...state, posts }));
    posts.forEach((post) => console.log(post))
  }

  render() {
    const { posts } = this.state;
    let postsA = []
    posts.forEach(post => {
        //Get URL
        const regex = /<!--(.*?)-->/;
        const match = post.match(regex);
        if (match) {
        const url = match[1].trim();
        console.log(url); // Outputs: https://example.com/content-url
        } else {
        console.log('No URL found');
        }
        //Get Title
        const tReg = /title:.*/
        const tMatch = post.match(tReg)
        if (tMatch) {
            const title = tMatch[0]
            console.log(title); // Outputs: https://example.com/content-url
            } else {
            console.log('No URL found');
            }
        //Get Content

        function findElem(regex, text, val) {
            const match = text.match(regex)
            let string = ""
            if (match) {
                if (val === "url") {
                    string = match[1].trim();                    
                } else if (val === "title") {
                    string = match[0].trim();
                    string = string.split(": ")[1]
                } else if (val === "content") {
                    string = text.split("#")[1]
                } else if (val === "pubDate") {
                    string = match[0].trim();
                    string = string.split(": ")[1]

                }
                return string
            } else {
                console.log('No value found');
                return string
            }
        }
        const pReg = /pubDate:.*/
        const cReg = /[\s\S]*/
        let title = findElem(tReg, post, 'title')
        let url = findElem(regex, post, 'url')
        let pubDate = findElem(pReg,post,'pubDate')
        let content = findElem(cReg,post,'content')
        let postItem = {'title': title, 'url': url, 'pubDate' : pubDate, 'content': content}
        postsA.push(postItem)

    })
    console.log(postsA)
    return (
        <div>
            <Helmet title="Eric Wickham Blog" />
        <section className="blog-section" id='blog'>
            <h4>Blog</h4>
          <div className="blog-carousel">
            {
              postsA.map((post, idx) => (
                <div className="box1" key={idx}>
                  <div className="box1-content">
                    <div className="content">
                      <h4>{post.title}</h4>
                      <h6>{post.pubDate}</h6>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
        </div>
    );
  }
}

export default Blog;