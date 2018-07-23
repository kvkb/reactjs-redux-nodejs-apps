import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import uuidv1 from 'uuidv1';
import { addArticle } from "../../redux/action-types";

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
};

class CreatePostContainer extends Component {
    constructor() {
        super();
        this.state = {
            title: "", 
            body: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const { body } = this.state;
        const id = uuidv1();
        this.props.addArticle({id,title,body});
        this.setState({title:"",body:""});
    }
    render() {
        const { title } = this.state;
        const { body } = this.state;
        return (
            <div>
                <form>
                    <div className="form-group">
                        <form onSubmit="{this.handlesubmit}">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" name="title" id="title" value={title} onChange={this.handleChange}/>
                            </div>                            
                            <div className="form-group">
                                <label htmlFor="body">Title</label>
                                <textarea name="body" className="form-control" id="body" cols="30" rows="10" value={body} onChange={this.handleChange}></textarea>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-success btn-lg">
                                    SAVE
                                </button>
                            </div>
                        </form>
                    </div>
                </form>
            </div>
        )
    }
}

const CreatePost = withRouter(connect(null, mapDispatchToProps)(CreatePostContainer));

export default CreatePost;
