import React from 'react';
import PropTypes from 'prop-types';

function SelectLanguage(props){
    const languages = ['All','Javascript','Ruby','Java','CSS','Python'];
    return (
        <ul className='languages'>
            {languages.map((lang)=>{
                return (
                    <li 
                        style={lang === props.selectedLanguage ? {color: 'red'} : null}
                        key={lang}
                        onClick={props.onSelect.bind(null, lang)}
                    >
                    {lang}
                    </li>
                );
            })}
        </ul>
    );
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang){
        this.setState(()=>{
            return{
                selectedLanguage: lang
            }
        });
    }

    render(){
        return (
            <div>
                <SelectLanguage
                    selectedLanguage = {this.state.selectedLanguage}
                    onSelect = {this.updateLanguage}
                />
            </div>
        );
    }
}

export default Popular;