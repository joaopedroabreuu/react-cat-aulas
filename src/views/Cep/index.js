import React from 'react';

class Cep extends React.Component {
    
    constructor(props) {
        super(props)
        this.state =  {
            data: {},
            cep: '',
            loading: false,
            error: false
        }
    }

    async getContents(cep) {
        this.setState({...this.state, loading: true});

        let response = await fetch(`https://api.postmon.com.br/v1/cep/${cep}`);
        let data = await response.json();
        return data;
    }

    componentDidMount() {
        // this.setState({...this.state, cep: this.props.match.params.cep});
        // console.log(this.state);
        this.getContents(this.props.match.params.cep)
        .then( data=> {
            this.setState({...this.state, data: data, loading: false, error: false})
        } )
        .catch( error=> {
            console.log(error);
            this.setState({...this.state, loading: false, error: true});
        })
    }

    render() {
        return (
            <div>
                <h1>Página - CEP</h1>
                {this.state.loading ? 'Carregando...' : ' '}
                {this.state.error  ? (
                    <p style={{color: 'red'}}>Erro</p>
                ) : (
                    <div>
                        <h2>{this.state.data.logradouro}</h2>
                        <h2>{this.state.data.bairro}</h2>
                        <h2>{this.state.data.cidade}</h2>
                        <h2>{this.state.data.estado}</h2>
                    </div>
                )}
                <h3>CEP CONTENT</h3>
            </div>
        )
    }
}

export default Cep;