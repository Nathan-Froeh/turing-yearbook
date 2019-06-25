import React, {Component} from 'react'
import './AddPerson.scss'

class AddPerson extends Component {
constructor(props) {
  super(props)
  this.state = {
    name: '',
    quote: '',
    superlative: ''
  }
}

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleAdd = (e) => {
    e.preventDefault()
    const {name, quote, superlative} = this.state
    this.props.addStudent(name, quote, superlative)
    this.props.hide()
  }

  render() {
    return(
      <section 
        className='add-box' 
          onSubmit={this.handleAdd}>
        <form action='add person'>
          <label htmlFor="name" >Name</label>
          <input 
           type='text' 
            name='name' 
            id='name' 
            onChange={this.handleChange}
          />
          <label htmlFor="quote">Quote</label>
          <input 
            type="text" 
            name='quote' 
            id='quote' 
            onChange={this.handleChange}
          />
          <label htmlFor="superlative">Superlative</label>
          <input 
            type="text" 
            name='superlative' 
            id='superlative' 
            onChange={this.handleChange}
          />
          <input type="submit" value='Submit'/>
        </form>
      </section>
    )
  }
}

export default AddPerson;