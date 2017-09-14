import React from 'react';

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
        const languages = ['All','Javascript','Ruby','Java','CSS','Python'];
        return (
            <ul className='languages'>
                {languages.map((lang)=>{
                    return (
                        <li 
                            style={lang === this.state.selectedLanguage ? {color: 'red'} : null}
                            key={lang}
                            onClick={this.updateLanguage.bind(null, lang)}
                        >
                        {lang}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default Popular;