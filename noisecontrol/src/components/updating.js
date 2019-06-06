import React from 'react';

class UpdateClass extends React.Component {
  constructor(props){
      super(props);
      this.state={
      }
  }

   

    render(){
        return(
            <div className='update'>

                   <h2>Update A Class</h2>
            <form onSubmit={this.props.updateClass}>
                <input
                    type='text'
                    onChange={this.changeHandler}
                    placeholder='Name'
                    name='name'
                    value={this.props.name}
                />
                <input
                    type='text'
                    onChange={this.changeHandler}
                    placeholder='ClassRoom Name'
                    value={this.props.classroomName}
                    name='classroomName'
                />

                <input
                    type='text'
                    onChange={this.changeHandler}
                    placeholder='Score'
                    value={this.props.score}
                    name='score'
                />

                <input
                    type='text'
                    onChange={this.changeHandler}
                    placeholder='Highest Score'
                    value={this.props.score}
                    name='highestScore'
                />
                <button type='submit'> Update A Class</button>
            </form>
        </div>
            
        )
    }
}

export default UpdateClass;