import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { useParams } from 'react-router-dom';

async function componentDidMount(files) {
    const posts = await Promise.all(files.map((file) => fetch(file).then((res) => res.text())))
      .catch((err) => console.error(err));
    return posts
}

const Single = async () => {
    const importAll = (r) => r.keys().map(r);
    const markdownFiles = importAll(require.context('./posts', false, /\.md$/))
    .sort()
    .reverse()
    let postNames = await componentDidMount(markdownFiles)
    const postName = useParams();
    let pagePost;
    postNames.forEach(post => {
        if (post === postName) {
            pagePost = post;
        } 
    })

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

    const uReg = /<!--(.*?)-->/;
    const tReg = /title:.*/
    const pReg = /pubDate:.*/
    const cReg = /[\s\S]*/
    const iReg = /image:.*/

    let title = findElem(tReg, pagePost, 'title')
    let url = findElem(uReg, pagePost, 'url')
    let pubDate = findElem(pReg,pagePost,'pubDate')
    let img = findElem(iReg,pagePost,'img')
    let imgPath = '/blog/'+img
    let content = findElem(cReg,pagePost,'content')

    // Create an object for each blog post to push to the set up
    let postItem = {'title': title, 'url': url, 'pubDate' : pubDate, 'content': content, 'img': imgPath}

    if (!pagePost) {
        return <h1>Post not found</h1>;
      }
    
      return (
        <div>
            <Nav/>
          <h1>{postItem.title}</h1>
          <p>{postItem.content}</p>
        </div>
      );
    
}



export default Single;