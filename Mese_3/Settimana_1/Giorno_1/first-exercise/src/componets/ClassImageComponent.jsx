import {Component} from 'react'

class ClassImageComponent extends Component{
    render(){
        return <img src={this.props.src} alt={this.props.alt}/>
    }
}

export default ClassImageComponent