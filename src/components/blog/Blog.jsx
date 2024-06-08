import React, { Component } from 'react';
import Helmet from 'react-helmet';
const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('./posts', false, /\.md$/))
    .sort()
    .reverse()

class Blog extends Component {
  state = {
    posts: [],
  }

  async componentDidMount() {
    const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
      .catch((err) => console.error(err));

    this.setState((state) => ({ ...state, posts }));
  }

  render() {
    const { posts } = this.state;
    let postsA = []
    let postCount = 0;
    posts.forEach(post => {
        //Get Elements from the markdown
        if (postCount < 4) {
          function findElem(regex, text, val) {
            const match = text.match(regex)
            let string = ""
            if (match) {
                if (val === "url") {
                    string = match[1].trim();                    
                } else if (val === "title" || val === "img")  {
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
        } postCount++
        const uReg = /<!--(.*?)-->/;
        const tReg = /title:.*/
        const pReg = /pubDate:.*/
        const cReg = /[\s\S]*/
        const iReg = /image:.*/

        let title = findElem(tReg, post, 'title')
        let url = findElem(uReg, post, 'url')
        let pubDate = findElem(pReg,post,'pubDate')
        let img = findElem(iReg,post,'img')
        let imgPath = '/blog/'+img
        let content = findElem(cReg,post,'content')

        // Create an object for each blog post to push to the set up
        let postItem = {'title': title, 'url': url, 'pubDate' : pubDate, 'content': content, 'img': imgPath}
        postsA.push(postItem)

        }
    })
    return (
        <div>
            <Helmet title="Eric Wickham Blog" />
        <section className="blog-section" id='blog'>
            <h4>Blog</h4>
          <div className="blog-carousel">
            {
              postsA.map((post, idx) => (
                <div className="box1" key={idx}>
                  <div className="box1Img">
                    <img src={process.env.PUBLIC_URL + post.img} alt={post.title} />
                  </div>
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