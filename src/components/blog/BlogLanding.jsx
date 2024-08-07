import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Header from '../Header';
import Nav from '../partial/Nav';   

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

    console.log("THESE ARE THE POSTS", posts)
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
        } 
        function findPostName(path) {
          // src/posts/blog2.md
          let string;
          try { 
            let string2 = path.split("src/posts")[1]
            string = string2.split(".")[0]
          } catch {
            string = "error"
          }

          return string
        }
        
        postCount++
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
        let filePath = '/blog' + findPostName(url)
        console.log("FILEPATH: ", filePath)

        // Create an object for each blog post to push to the set up
        let postItem = {'title': title, 'url': url, 'pubDate' : pubDate, 'content': content, 'img': imgPath, 'fileName': filePath}
        //console.log('post item: ',postItem)
        postsA.push(postItem)

        }
        //console.log("posts",postsA)
    })
    postsA.sort((a,b) => a.pubDate - b.pubDate)

    return (
          <div>
            <Header />
            <Nav />
            <Helmet title="Eric Wickham Blog" />
            <h1 className="blog-title-landing">Blog Entries</h1>

              <section className="blog-landing-section" id='blog'>
                <div className="blog-carousel-2">
                  {
                    postsA.map((post, idx) => (
                      //get a number to add to class
                      <a href={post.fileName}>
                      <div className="box2" key={idx}>
                        <div className="box2-img">
                          <img src={process.env.PUBLIC_URL + post.img} alt={post.title} />
                        </div>
                        <div className="box2-content">
                          <div className="content">
                            <h4>{post.title}</h4>
                            <h6>{post.pubDate}</h6>
                          </div>
                        </div>
                      </div>
                      </a>
                    ))
                  }
                </div>
              </section>
          </div>
          );
  }
}

export default Blog;