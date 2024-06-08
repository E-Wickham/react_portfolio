import React, { useState,useEffect } from 'react';
import Helmet from 'react-helmet';
import { useParams } from 'react-router-dom';
import Nav from '../partial/Nav';


const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('./posts', false, /\.md$/))
    .sort()
    .reverse()

async function componentDidMount() {
    const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
        .catch((err) => console.error(err));

    this.setState((state) => ({ ...state, posts }));
}

const Post = () => {    
    const { postName } = useParams()
    const postVal = "123124"
    const importAll = (r) => r.keys().map(r);
    const markdownFiles = importAll(require.context('./posts', false, /\.md$/))
    .sort()
    .reverse()

    //Set the Content, title and image from variables on this end
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
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


      const loadBlogContent = async (files) => {
        try {



        console.log("files", files)
        const context = require.context('./posts', false, /\.md$/);
        const filePath = `./${postName}.md`;
        console.log(filePath)
        console.log(context.keys())
        let files1 = context.keys()
        files1.forEach(file => {
            console.log(file)
        })
          if (context.keys().includes(filePath)) {
            const fileContent = await context(filePath);
            const response = await fetch(fileContent);
            const text = await response.text();
            const uReg = /<!--(.*?)-->/;
            const tReg = /title:.*/
            const pReg = /pubDate:.*/
            const cReg = /[\s\S]*/
            const iReg = /image:.*/
    
            let title = findElem(tReg, text, 'title')
            let url = findElem(uReg, text, 'url')
            let pubDate = findElem(pReg,text,'pubDate')
            let img = findElem(iReg,text,'img')
            let imgPath = '/blog/'+img
            let postContent = findElem(cReg,text,'content')

            console.log(title)
            console.log(content)
            console.log(url)
            setContent(postContent);
            setTitle(title);
            setImage(imgPath);
          } else {
            setContent('Post not found');
          }
        } catch (error) {
          console.error('Error loading blog post:', error);
          setContent('Error loading blog post');
        }
      };
  
      loadBlogContent(markdownFiles, postName);
    });






return(
    <div>
        <div className="blog-container">
            <Nav />
            <h2>{title}</h2>
            <img src={process.env.PUBLIC_URL + image} alt={postName}/>
            <div>{content}</div>
        </div>


    </div>


);

}


export default Post;