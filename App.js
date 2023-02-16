import './App.css';
import BlogCard from './blogCard';
import { isArrayEmpty } from './Utils';
import { Component } from 'react';

class App extends Component {
  state = {
    showBlogs: true,
  

  blogArr: [
    {
      id: 1,
      title: 'Blog Title 1',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
      LikeCount: 0
    },
    {
      id: 2,
      title: 'Blog Title 2',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
      LikeCount: 0
    },
    {
      id: 3,
      title: 'Blog Title 3',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
      LikeCount: 0
    }
  ]
  }


  

  onHideBtnClick = () => {
    //let updatedState = !this.state.showBlogs;
    this.setState((prevState, prevProps) => {
      return { showBlogs: !prevState.showBlogs }
    });

    console.log(this.showBlogs);
  }

onLikeBtnClick =(pos) => {
  var updatedBlogList = this.state.blogArr;
  var updatedBlogObj = updatedBlogList[pos];

  updatedBlogObj = updatedBlogObj.LikeCount +1;
  updatedBlogList[pos] = updatedBlogObj;

  this.setState({blogArr: updatedBlogList});

  //console.log(updatedBlogObj);
}

  render() {
    console.log('Render Called');
    console.log(this.state);

    const blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {
      console.log(item);
      return (
        <BlogCard className={'Blog'} key={pos} title={item.title} description={item.description} LikeCount={item.LikeCount} id={item.id} onLikeBtnClick={() => this.onLikeBtnClick(pos)} position={pos} />
        //<div className="BlogCard" key={item.id}>
        //  <h3>{item.title}</h3>
        //  <p>{item.description}</p>
        //</div>
      )
    })

    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
        <br></br>
        {this.state.showBlogs ? blogCards : null}
      </div>
    );
  }
}

export default App;
