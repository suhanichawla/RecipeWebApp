import React, {Component} from 'react';
import '../css/RecipeInput.css'
class RecipeInput extends Component{
    static defaultProps={
        onClose(){},
        onSave(){}
        
    }
    constructor(props){
        super(props)
        this.state={
            title:'',
            instructions:"",
            ingredients:[''],
            img:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleNewIngredient=this.handleNewIngredient.bind(this);
        this.handleChangeIng=this.handleChangeIng.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onSave({...this.state});
        this.setState({
            title:'',
            instructions:"",
            ingredients:[''],
            img:''
        })
    }
    handleNewIngredient(e){
        const {ingredients}=this.state;
        this.setState({ingredients:[...ingredients,'']})
    }
    handleChangeIng(e){
        const index=Number(e.target.name.split('-')[1]);
        const ingredients=this.state.ingredients.map((ing,i)=>{
            return i===index ? e.target.value : ing
        })
        this.setState({ingredients})
    }
    render(){
        const {title,instructions,img,ingredients}=this.state;
        const {onClose}=this.props;
        let inputs=ingredients.map((ing,i)=>(
            <div 
            className="recipe-form-line"
            key={`ingredient-${i}`}
            >
                <label>{i+1}.
                    <input
                        type="text"
                        name={`ingredient-${i}`}
                        value={ing}
                        size={45}
                        placeholder="Ingredient"
                        autoComplete="off"
                        onChange={this.handleChangeIng}
                    />
                </label>
            </div>
        ))
        return(
            <div className="recipe-form-container">
                <form className="recipe-form" onSubmit={this.handleSubmit}>
                    <button
                        type="button"
                        className="close-button"
                        onClick={onClose}
                    >X</button>
                    <div className="recipe-form-line">
                    <label htmlFor='recipe-title-input'>Title</label>
                        <input
                        id='recipe-title-input'
                        key='title'
                        name='title'
                        type='text'
                        value={title}
                        size={42}
                        autoComplete="off"
                        onChange={this.handleChange}/>
                    </div>
                        <label 
                            htmlFor="recipe-instructions-input"
                            style={{marginTop:'5px'}}
                        >
                            Instructions
                        </label>
                        <textarea
                            key="instructions"
                            id="recipe-instructions-input"
                            type="Intructions"
                            name="instructions"
                            rows="8"
                            cols="50"
                            autoComplete="off"
                            value={instructions}
                            onChange={this.handleChange}/>
                        {inputs}
                        <button 
                            type="button"
                            className="buttons"
                            onClick={this.handleNewIngredient}
                        >
                        +
                        </button>
                    <div className="recipe-form-line">
                        <label 
                            htmlFor="recipe-img-input"
                        >
                            Image URL
                        </label>
                        <input
                            id="recipe-img-input"
                            type="text"
                            placeholder=""
                            name="img"
                            autoComplete="off"
                            value={img}
                            size={36}
                            onChange={this.handleChange}/>
                    </div>
                    <button 
                        type="submit"
                        className="buttons"
                        style={{alignSelf:"flex-end",marginRight:0}}
                    >
                    Save
                    </button>
                </form>
            </div>
        )
    }
}

export default RecipeInput;