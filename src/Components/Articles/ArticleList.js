import React, { Component, createRef } from 'react'
import {gABQ} from '../../Functions/api'
import Button from '../Button/Button'
import Article from './Article'


export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.btnRef = React.createRef();
  }
    state ={
        articles: []
    }

  async componentDidMount(){
    const articles = await gABQ("NaH")
    console.log(articles)
    this.setState({articles})
}

  render() {
    const {articles} = this.state
    if(!articles.length){
        return <div>Loading</div>
    }
    return (
      <div>
        <form onSubmit={async (e) =>{
          e.preventDefault();
          const articles = await gABQ(this.btnRef.current.value) 
          console.log(articles)
          this.setState({articles})
          }}>
          <input style={{height:'40px', width:'200px', padding: 0,}} ref={this.btnRef} />
          <Button>SEARCH</Button>
        </form>
        <ul>
        {
            articles.map((list) => {
                return(
                    <Article list={list} />
                )
            })
        }
      </ul>
      </div>
    )
  }
}