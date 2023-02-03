import { Component } from "react";
import { gABN } from "../../Functions/api";
export default class Article extends Component{

    //'/items/${article.objectID}'
     ItemInfo = async() =>{
        const response = await gABN(this.props.list.objectID)
        console.log(response)
    }
    render(){
        const { list } = this.props;
        return (
            <li onClick={this.ItemInfo} key={list.objectID}>
                {list.title}
            </li>
        )
    }
}