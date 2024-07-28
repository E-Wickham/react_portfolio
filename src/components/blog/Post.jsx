import React, { useState,useEffect } from 'react';
//import {Helmet} from 'react-helmet';
import { useParams } from 'react-router-dom';
import Nav from '../partial/Nav';
import ReactMarkdown from 'react-markdown'
import Blog from './Blog'
//import Header from '../Header';


//const importAll = (r) => r.keys().map(r);
//const markdownFiles = importAll(require.context('./posts', false, /\.md$/))
    //.sort()
    //.reverse()

const Post = () => {   

    const { postName } = useParams()
    //const postVal = "123124"
    const importAll = (r) => r.keys().map(r);
    const markdownFiles = importAll(require.context('./posts', false, /\.md$/))
    .sort()
    .reverse()

    //Set the Content, title and image from variables on this end
    const [content, setContent] = useState('');
    //const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
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
        //console.log("files", files)
        const context = require.context('./posts', false, /\.md$/);
        const filePath = `./${postName}.md`;
        //console.log(filePath)
        //console.log(context.keys())
        ///let files1 = context.keys()
          if (context.keys().includes(filePath)) {
            const fileContent = await context(filePath);
            const response = await fetch(fileContent);
            const text = await response.text();
            const uReg = /<!--(.*?)-->/;
            const tReg = /title:.*/
           // const pReg = /pubDate:.*/
            const cReg = /[\s\S]*/
            const iReg = /image:.*/
    
            let title = findElem(tReg, text, 'title')
            let url = findElem(uReg, text, 'url')
            //let pubDate = findElem(pReg,text,'pubDate')
            let img = findElem(iReg,text,'img')
            let imgPath = '/blog/'+img
            let postContent = findElem(cReg,text,'content')

            console.log(title)
            //console.log(content)
            console.log(url)
            setContent(postContent);
            //setTitle(title);
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

    
    //Check Markdown for specific markers indicated images 
    useEffect(() => {
        function createImage(node) {
            let imgPath = node.innerHTML 
            let cleanImg = imgPath.split('{img}"')[1].split('"{/img}')[0]
            console.log(cleanImg)
            node.innerText = ""

            let newImg = document.createElement('img')
            newImg.setAttribute("src", cleanImg)
            node.appendChild(newImg)
        }
        console.log("This should happen at the end" )
        let mkdn = document.querySelector(".markdown-holder");
        let txtNodes = mkdn.querySelectorAll("p");
        txtNodes.forEach(node => {
            if ( node.innerHTML.includes("{img}")) {
                createImage(node)
            } else {
                console.log('nothing')
            }
        })    
    }); 

return(
        <div>
            <Nav />
            <div>
                <div className="blog-container">
                    {/*<h2>{title}</h2>*/}
                    <img src={process.env.PUBLIC_URL + image} alt={postName}/>
                    <div className="markdown-holder">
                        <ReactMarkdown>
                            {"#" + content}
                        </ReactMarkdown>
                    </div>
                </div>
                <div className="blog-sidebar">
                    <Blog />
                </div>
            </div>
        </div>

);

}


export default Post;