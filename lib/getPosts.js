import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// Hier lesen wir den Inhalt der Markdown Blogpost Datei aus 
// Es wird getAllPosts aufgerufen in der blog page

// erstellt path zu root directory
const postsDirectory = path.join(process.cwd(), 'content');

// gibt alle Files innerhalb des Content Folders zurück
export function getPostFiles() {
    const postFiles = fs.readdirSync(postsDirectory); 
    return postFiles
}

// extrahiert den Content aus den markdownFiles und gibt den slug (dateinamen ohne .md) zurück und gibt den Content zurück
// und gibt die Metadaten zwischen ---  --- zurück. -> hierfür braucen wir matter
export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
  
    const postData = {
      slug: postSlug,
      ...data,
      content,
    };
  
    return postData;
  }

  // führt die obigen Funktionen zusammen und sortiert die Posts nach datum 
  export function getAllPosts() {
    const postFiles = getPostFiles();
    const allPosts = postFiles.map(postFile => {
      return getPostData(postFile);
    });
  
    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);  
    return sortedPosts;
  }